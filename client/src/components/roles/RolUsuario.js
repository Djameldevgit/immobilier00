 
import { useSelector, useDispatch } from 'react-redux';
import { roleusernoidentificado,roleuserautenticado,rolesuperuser, rolemoderador, roleadmin} from '../../redux/actions/roles/roleAction';
import UserCard from '../UserCard';
import Table from 'react-bootstrap/Table';
 
 
const RolUsuario = () => {
  const { usersReducer ,auth } = useSelector(state => state);
 
  const dispatch = useDispatch();
 
  const handleChangeRole = async (user, selectedRole) => {
    switch (selectedRole) {
   
      case 'user':
        await dispatch(roleuserautenticado(user, auth));
        break;
      case 'Super-utilisateur':
        await dispatch(rolesuperuser(user, auth));
        break;
      case 'Moderateur':
        await dispatch(rolemoderador(user, auth));
        break;
      case 'admin':
        await dispatch(roleadmin(user, auth));
        break;


      default:
        break;
    }
  };

  return (
   
      <Table responsive>
      <thead>
        <tr>
          <th>Usuario</th>
          <th>Rol Actual</th>
          <th>Cambiar Rol</th>
        </tr>
      </thead>
      <tbody>
        {usersReducer.users.map((user) => (
             user._id !== auth.user._id && user.role !== 'admin' && (
          <tr key={user._id}>
            <td>
              <UserCard user={user} />
            </td>
            <td>{user.role}</td>
            <td>
              <select
                className='form-control'
                onChange={(e) => handleChangeRole(user, e.target.value)}
              >
                <option value=''>Seleccionar Rol</option>
            
                <option value='user'>Utilisateur authentifié</option>
                <option value='Super-utilisateur'>Super utilisateur</option>
                <option value='Moderateur'>Moderateur</option>
                <option value='admin'>admin</option>
              </select>
            </td>
          </tr>
)
        ))}
      </tbody>
    </Table>
    

 
  
  );
};

export default RolUsuario