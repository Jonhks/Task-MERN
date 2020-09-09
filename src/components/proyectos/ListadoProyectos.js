import React, { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Proyecto from './Proyecto';

import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {
  // Extraer proyectos desde el state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  useEffect(() => {
    obtenerProyectos();
    // eslint-disable-next-line
  }, []);

  if (proyectos.length === 0) {
    return (
      <p>No hay proyectos, comienza creando uno</p>
    );
  }

  return (
    <TransitionGroup>
      <ul className="listado-proyectos">
        {proyectos.map((proyecto) => (
          <CSSTransition
            key={proyecto.id}
            timeout={300}
            classNames="proyecto"
          >
            <Proyecto
              proyecto={proyecto}
            />
          </CSSTransition>
        ))}
      </ul>
    </TransitionGroup>
  );
};

export default ListadoProyectos;
