import React, { PropTypes } from 'react';
import classnames from 'classnames';
import s from './MediaType.css';


function MediaType(props) {
  const className = classnames(s.mediaType, props.className);
  return (
    <div className={className}>

    </div>
  );
}
MediaType.propTypes = {
  schema: PropTypes.object,
  examples: PropTypes.array,
  example: PropTypes.object,
  encoding: PropTypes.object
};


export default MediaType;
