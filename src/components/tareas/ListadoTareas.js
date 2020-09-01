import React, { useContext } from 'react';
import Tarea from './Tarea';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const ListadoTareas = () => {
  // Extraer proyectos desde el state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  // obtener las tareas del proyecto
  const tareasContext = useContext(tareaContext);
  const { tareasProyecto } = tareasContext;

  // Si no hay proyecos seleccionados
  if (!proyecto) {
    return (
      <h2>Seleccina un Proyecto</h2>
    );
  }

  // ArrayDestructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
  };

  return (
    <div>
      <h2>
        Proyecto:
        {' '}
        {proyectoActual.nombre}
      </h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0
          ? (
            <li className="tarea">
              <p>No hay tareas</p>
            </li>
          )
          : tareasProyecto.map((tarea) => (
            <Tarea tarea={tarea} />
          ))}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >
        Eliminar Proyecto &times;
      </button>
    </div>
  );
};

export default ListadoTareas;
