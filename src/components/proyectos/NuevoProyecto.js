import React, { useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {
  // obtener el state del formulario desde context
  const proyectosContext = useContext(proyectoContext);
  const {
    formulario, errorFormulario, mostrarFormulario, agregarProyecto, mostrarError,
  } = proyectosContext;

  const [proyecto, guardarProyecto] = useState({
    nombre: '',
  });

  const { nombre } = proyecto;

  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto, [e.target.name]: e.target.value,
    });
  };

  const onSumitProyecto = (e) => {
    e.preventDefault();

    // Validar el proyecto
    if (nombre === '') {
      mostrarError();
      return;
    }

    // agregar al state
    agregarProyecto(proyecto);

    // reiniciar el form
    guardarProyecto({
      nombre: '',
    });
  };

  const onClickFormulario = () => {
    mostrarFormulario();
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>
      {
        formulario
          ? (
            <form
              className="formulario-nuevo-proyecto"
              onSubmit={onSumitProyecto}
            >
              <input
                type="text"
                className="input-text"
                placeholder="Nombre Proyecto"
                name="nombre"
                value={nombre}
                onChange={onChangeProyecto}
              />
              <input
                type="submit"
                className="btn btn-primario btn-block"
                value="Agregar Proyecto"
              />
            </form>
          ) : null
      }
      {errorFormulario ? <p className="mensaje error"> El nombre del Proyecto es obligatorio</p> : null}
    </div>
  );
};

export default NuevoProyecto;
