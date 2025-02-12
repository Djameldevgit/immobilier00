import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoadIcon from '../../images/loading.gif';
import LoadMoreBtn from '../LoadMoreBtn';
import { getDataAPI } from '../../utils/fetchData';
import { deleteUser, viewUserDetails, editUser, USER_TYPES } from '../../redux/actions/userAction';
import UserCard from '../UserCard';
 

// Función para formatear la fecha en un formato legible
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const SearchInfoUsers = () => {
  const { homeUsers, auth } = useSelector(state => state);

  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState('');

  // Manejar la carga de más usuarios
  const handleLoadMore = async ({ user }) => {
    setLoad(true);
    const res = await getDataAPI(`users?limit=${homeUsers.page * 9}`, auth.token);

    dispatch({
      type: USER_TYPES.GET_USERS,
      payload: { ...res.data, page: homeUsers.page + 1 }
    });

    setLoad(false);
  };

  // Filtrar usuarios según la búsqueda
  const filteredUsers = homeUsers.users.filter(user =>
    user.username.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
     
      
      {/* Formulario de búsqueda */}
      <div className="row mb-4">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar por nombre o email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Tabla de usuarios */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>User  </th>
              <th>Email</th>
              <th>Fecha de registro</th>
              <th>Action</th>

            </tr>
          </thead>


          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td><UserCard user={user} /></td>
                <td>{user.email}</td>
                <td>{formatDate(user.createdAt)}</td>
               
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id={`dropdownMenuButton${user._id}`}
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Acciones
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby={`dropdownMenuButton${user._id}`}>
                      <button className="dropdown-item" onClick={() => dispatch(viewUserDetails(user))}>Ver detalles</button>
                      <button className="dropdown-item" onClick={() => dispatch(editUser(user))}>Editar usuario</button>
                        <button className="dropdown-item" onClick={() => dispatch(deleteUser(user._id, auth.token))}>Eliminar usuario</button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {load && <img src={LoadIcon} alt="loading" className="d-block mx-auto" />}

      <LoadMoreBtn result={homeUsers.result} page={homeUsers.page} load={load} handleLoadMore={handleLoadMore} />
    </div>
  );
};

export default SearchInfoUsers;
