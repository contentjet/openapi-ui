import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Parameter from 'lib/components/openapi/Parameter';
import s from './Parameters.css';


function Parameters(props) {
  const className = classnames(s.parameters, props.className);

  const pathParameters = props.parameters.filter(parameter => parameter.in === 'path');
  const queryParameters = props.parameters.filter(parameter => parameter.in === 'query');
  const headerParameters = props.parameters.filter(parameter => parameter.in === 'header');
  const cookieParameters = props.parameters.filter(parameter => parameter.in === 'cookie');

  const create = (parameter) => <Parameter key={`${parameter.name}${parameter.in}`} {...parameter} />;

  return (
    <div className={className}>
      { pathParameters.length > 0 && <h5>Path parameters</h5> }
      { pathParameters.map(create) }

      { queryParameters.length > 0 && <h5>Query parameters</h5> }
      { queryParameters.map(create) }

      { headerParameters.length > 0 && <h5>Header parameters</h5> }
      { headerParameters.map(create) }

      { cookieParameters.length > 0 && <h5>Cookie parameters</h5> }
      { cookieParameters.map(create) }
    </div>
  );
}
Parameters.propTypes = {
  parameters: PropTypes.array
};


export default Parameters;
