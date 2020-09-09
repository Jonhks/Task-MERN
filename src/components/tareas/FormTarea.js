import React, { useEffect, useContext, useState } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {
  // Extraer si el proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // obtener la funcion del context de tarea
  const tareasContext = useContext(tareaContext);
  const {
    tareaSeleccionada, errorTarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea,
  } = tareasContext;

  // State del formulario
  const [tarea, guardarTarea] = useState({
    nombre: '',
  });

  // Effect que detecta la tarea seleccionada
  useEffect(() => {
    if (tareaSeleccionada !== null) {
      guardarTarea(tareaSeleccionada);
    } else {
      guardarTarea({
        nombre: '',
      });
    }
  }, [tareaSeleccionada]);

  // Si no hay proyecos seleccionados
  if (!proyecto) return null;

  // Extraer el nombre del proyecto
  const { nombre } = tarea;

  // Leer los valores del formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  // ArrayDestructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const onSubmit = (e) => {
    e.preventDefault();

    // validar
    if (nombre.trim() === '') {
      validarTarea();
      return;
    }

    // Revisar si e edición o es una nueva tarea
    if (tareaSeleccionada == null) {
      // tarea nueva
      // agregar la nueva tarea al state de tareas
      tarea.proyectoId = proyectoActual.id;
      tarea.estado = false;
      agregarTarea(tarea);
    } else {
      // actualiza la tarea existente
      actualizarTarea(tarea);

      // Eliminar taarea seleccionada del state
      limpiarTarea();
    }

    // Obtener y filtrar las tareas del proyecto
    obtenerTareas(proyectoActual.id);
    // reiniciar el form
    guardarTarea({
      nombre: '',
    });
  };

  return (
    <div className="formulario">
      <form
        onSubmit={onSubmit}
      >
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre de la Tarea"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
          />
        </div>
      </form>
      {errorTarea ? <p className="mensaje error">El nombre de la tarea no puede ir vacío</p> : null}
    </div>
  );
};

export default FormTarea;
