import React, { PropTypes } from 'react';
import classnames from 'classnames';
import s from './EncodingProperty.css';


function EncodingProperty(props) {
  const className = classnames(s.encodingProperty, props.className);
  return (
    <div className={className}>

    </div>
  );
}
EncodingProperty.propTypes = {
  contentType: PropTypes.string,
  headers: PropTypes.object,
  style: PropTypes.string,
  explode: PropTypes.bool
};


export default EncodingProperty;
