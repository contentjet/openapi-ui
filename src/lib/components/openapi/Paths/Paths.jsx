import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Heading from 'lib/components/common/Heading';
import PathItem from 'lib/components/openapi/PathItem';
import s from './Paths.css';


function Paths(props) {
  const className = classnames(s.paths, props.className);
  return (
    <section className={className}>
      <Heading
        id="paths"
        className={s.heading}
        level="h2"
      >
        Paths
      </Heading>
      {
        Object.keys(props.paths).map(path => {
          return (
            <div key={path} className={s.path}>
              <h3 className={s.pathHeading}>{ path }</h3>
              <PathItem {...props.paths[path]} />
            </div>
          );
        })
      }
    </section>
  );
}
Paths.propTypes = {
  paths: PropTypes.object.isRequired
};


export default Paths;
