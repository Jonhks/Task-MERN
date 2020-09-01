import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({ proyecto }) => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  // obtener la funcion del context de tarea
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  // Funcion para agregar el proyecto actual
  const seleccionarProyect = (id) => {
    proyectoActual(id); // Fijar el proyecto actual
    obtenerTareas(id); // Filtrar las tareas cuando se da click
  };

  return (
    <li>
      <button
        type="submit"
        className="btn btn-blank"
        onClick={() =>  seleccionarProyect(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
