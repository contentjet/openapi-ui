import React, { PropTypes } from 'react';
import classnames from 'classnames';
import s from './OAuthFlows.css';


function OAuthFlows(props) {
  const className = classnames(s.oAuthFlows, props.className);
  return (
    <div className={className}></div>
  );
}
OAuthFlows.propTypes = {
  implicit: PropTypes.object,
  password: PropTypes.object,
  clientCredentials: PropTypes.object,
  authorizationCod: PropTypes.object
};


export default OAuthFlows;
