import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {
  TAREAS_PROYECTO,
  AGREGAR_TAREA,
  VALIDAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  TAREA_ACTUAL,
  ACTUALIZAR_TAREA,
  LIMPIAR_TAREA,
} from '../../types';

const TareaState = (props) => {
  const initialState = {
    tareas: [
      {
        id: 0, proyectoId: 1, nombre: 'Elegir Plataforma', estado: true,
      },
      {
        id: 1, proyectoId: 2, nombre: 'Elegir Colores', estado: false,
      },
      {
        id: 2, proyectoId: 3, nombre: 'Elegir Plataforma de pago', estado: false,
      },
      {
        id: 3, proyectoId: 4, nombre: 'Elegir Hosting', estado: true,
      },
      {
        id: 4, proyectoId: 1, nombre: 'Elegir Plataforma', estado: true,
      },
      {
        id: 5, proyectoId: 2, nombre: 'Elegir Colores', estado: false,
      },
      {
        id: 6, proyectoId: 3, nombre: 'Elegir Plataforma de pago', estado: false,
      },
      {
        id: 7, proyectoId: 4, nombre: 'Elegir Plataforma', estado: true,
      },
      {
        id: 8, proyectoId: 1, nombre: 'Elegir Colores', estado: false,
      },
      {
        id: 9, proyectoId: 2, nombre: 'Elegir Plataforma de pago', estado: false,
      },
      {
        id: 10, proyectoId: 3, nombre: 'Elegir Plataforma', estado: true,
      },
      {
        id: 11, proyectoId: 2, nombre: 'Elegir Colores', estado: false,
      },
      {
        id: 12, proyectoId: 3, nombre: 'Elegir Plataforma de pago', estado: false,
      },
    ],
    tareasProyecto: null,
    errorTarea: false,
    tareaSeleccionada: null,
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
    // eslint-disable-next-line no-param-reassign
    tarea.id = uuidv4();
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

  // Eliminar una tarea por su id
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };

  // Modificar el estado de completado de las tareas
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  // Extraer una tarea para editarla
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  // edita y modifica la tarea
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  // limpiar la tarea seleccionada
  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasProyecto: state.tareasProyecto,
        errorTarea: state.errorTarea,
        tareaSeleccionada: state.tareaSeleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
