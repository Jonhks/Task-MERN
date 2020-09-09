/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Tarea = ({ tarea }) => {
  // obtener la funcion del context de tarea
  const tareasContext = useContext(tareaContext);
  const {
    eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual,
  } = tareasContext;

  // Extraer si el proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // extraer el proyecto
  const [proyectoActual] = proyecto;

  // funcion que se ejecuta cuando el usuario presiona el boton de eiminar tarea
  const tareaAEliminar = (id) => {
    eliminarTarea(id);
    obtenerTareas(proyectoActual.id);
  };

  // funcion que modifica el estado de las tareas
  const cambiarEstado = (tareaEdo) => {
    if (tareaEdo.estado) {
      tareaEdo.estado = false;
    } else {
      tareaEdo.estado = true;
    }
    cambiarEstadoTarea(tareaEdo);
  };

  // agrega una tarea actual cuando el usuaio de click en editar 
  const seleccionarTarea = (tareaEd) => {
    guardarTareaActual(tareaEd);
  };

  return (
    <li className="tarea sombra">
      <p>
        {tarea.nombre}
      </p>
      <div className="estado">
        {
          tarea.estado
            ? (
              <button
                type="button"
                className="completo"
                onClick={() => cambiarEstado(tarea)}
              >
                Completo
              </button>
            )
            : (
              <button
                type="button"
                className="incompleto"
                onClick={() => cambiarEstado(tarea)}
              >
                Incompleto
              </button>
            )
        }
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => seleccionarTarea(tarea)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaAEliminar(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
