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
        level="h2"
      >
        Paths
      </Heading>
      {
        Object.keys(props.paths).map(path => {
          return (
            <div key={path} className={s.path}>
              <Heading level="h3">{ path }</Heading>
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
