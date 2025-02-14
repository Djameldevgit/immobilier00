import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlockedUsers, unblockUser } from "../../redux/actions/userBlockAction";


const ListaUsuariosBloqueados = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();
  const { userBlockReducer, auth } = useSelector(state =>state );
   
  const { } = useSelector(state => state);

  useEffect(() => {
    if (isOpen) {
      dispatch(getBlockedUsers(auth));
    }
  }, [dispatch, auth, isOpen]);

  const handleUnblock = (userId) => {
    dispatch(unblockUser(userId, auth));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Fondo oscuro */}
      <div className="modal-backdrop fade show"></div>

      {/* Modal */}
      <div className={`modal fade ${isOpen ? "show" : ""}`} style={{ display: "block" }} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Usuarios Bloqueados</h5>
              <button type="button" className="close" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              {Array.isArray(userBlockReducer.blockedUsers) ? userBlockReducer.blockedUsers.map(user => (
                <div key={user.id}>{user.name}
                  <li key={user._id} className="list-group-item d-flex justify-content-between align-items-center">
                    {user.username} ({user.email})
                    <button className="btn btn-success btn-sm" onClick={() => handleUnblock(user._id)}>
                      Desbloquear
                    </button>
                  </li>
                </div>

              )) : <p>No hay usuarios bloqueados</p>}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaUsuariosBloqueados;

 