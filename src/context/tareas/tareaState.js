import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
} from '../../types';

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { proyectoId: 1, nombre: 'Elegir Plataforma', estado: true },
      { proyectoId: 2, nombre: 'Elegir Colores', estado: false },
      { proyectoId: 3, nombre: 'Elegir Plataforma de pago', estado: false },
      { proyectoId: 4, nombre: 'Elegir Hosting', estado: true },
      { proyectoId: 1, nombre: 'Elegir Plataforma', estado: true },
      { proyectoId: 2, nombre: 'Elegir Colores', estado: false },
      { proyectoId: 3, nombre: 'Elegir Plataforma de pago', estado: false },
      { proyectoId: 4, nombre: 'Elegir Plataforma', estado: true },
      { proyectoId: 1, nombre: 'Elegir Colores', estado: false },
      { proyectoId: 2, nombre: 'Elegir Plataforma de pago', estado: false },
      { proyectoId: 3, nombre: 'Elegir Plataforma', estado: true },
      { proyectoId: 2, nombre: 'Elegir Colores', estado: false },
      { proyectoId: 3, nombre: 'Elegir Plataforma de pago', estado: false },
    ],
    tareasProyecto: null,
    errorTarea: false,
  };
  // crear dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  // crear funciones

  // obtener las tareas por id de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  // Agregar una tarea al proyecto seleccionado

  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  // Validar y mostrar error en el caso necesario
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
