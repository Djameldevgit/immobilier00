import React, { useState } from "react";
import { FormCheck } from "react-bootstrap";
import { useSelector,useDispatch } from 'react-redux';
import { bloquearUsuario } from "../../redux/actions/userBlockAction";
 
const BloquearUsuarios = ({ selectedUser, handleClose }) => {
  const {auth} = useSelector(state=>state)
  const dispatch= useDispatch()
  const [datosBloqueo, setDatosBloqueo] = useState({
    esBloqueado: false,
    motivo: "",
    fechaBloqueo: new Date().toISOString().slice(0, 16), // Formato para <input type="datetime-local">
    fechaDesbloqueo: "",
  });

  const { esBloqueado, motivo, fechaBloqueo, fechaDesbloqueo } = datosBloqueo;

  const handleChangeInput = (e) => {
    const { name, value, type, checked } = e.target;
    setDatosBloqueo({ ...datosBloqueo, [name]: type === "checkbox" ? checked : value });
  };

  const handleBloqueo = (e) => {
    e.preventDefault();
    
    if (!selectedUser || !selectedUser._id) {
      console.error("Error: Usuario no definido");
      return;
    }

    const datos = { ...datosBloqueo, selectedUser, auth };
    console.log("Enviando datos a la acción:", datos); // 🔍 Debugging

    dispatch(bloquearUsuario(datos)); // 🚀 Enviamos la acción

    handleClose();
  };
  return (
    <div className="modal" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmar bloqueo</h5>
            <button type="button" className="close" onClick={handleClose}>
              &times;
            </button>
          </div>
          <form onSubmit={handleBloqueo}>
            <div className="modal-body">
              <div className="form-group">
                <label>Motivo del bloqueo</label>
                <input
                  type="text"
                  className="form-control"
                  name="motivo"
                  value={motivo}
                  onChange={handleChangeInput}
                  placeholder="Ingresa el motivo"
                  required
                />
              </div>
              <div className="form-group">
                <FormCheck
                  type="checkbox"
                  label="Bloquear usuario"
                  name="esBloqueado"
                  checked={esBloqueado}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Fecha de bloqueo</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="fechaBloqueo"
                  value={fechaBloqueo}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>Fecha de desbloqueo</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="fechaDesbloqueo"
                  value={fechaDesbloqueo}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-danger">Bloquear</button>
              <button type="button" className="btn btn-secondary" onClick={handleClose}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BloquearUsuarios;
