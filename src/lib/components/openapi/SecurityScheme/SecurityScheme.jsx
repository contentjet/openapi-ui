import React, { PropTypes } from 'react';
import classnames from 'classnames';
import s from './SecurityScheme.css';


function SecurityScheme(props) {
  const className = classnames(s.securityScheme, props.className);
  return (
    <div className={className}></div>
  );
}
// TODO: Proptype validation is conditional dependant on type.
SecurityScheme.propTypes = {
  type: PropTypes.oneOf(['apiKey', 'http', 'oauth2', 'openIdConnect']).isRequired,
  description: PropTypes.string,
  name: PropTypes.string.isRequired,
  in: PropTypes.oneOf(['query', 'header']).isRequired,
  scheme: PropTypes.string.isRequired,
  bearerFormat: PropTypes.string,
  flow: PropTypes.object.isRequired,
  openIdConnectUrl: PropTypes.string

};


export default SecurityScheme;
