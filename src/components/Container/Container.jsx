import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Container =({title, children}) =>{ 
  return (
  <>
      {children && (<div className="ContainerWrapper">
        {title && (<h1>{title} </h1>)}
          {children}
      </div>)}
       
    </>
    );
  }
 
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  // bla: 'test',
};

export default Container;