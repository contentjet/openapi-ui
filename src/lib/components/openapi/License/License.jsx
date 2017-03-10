import React, { PropTypes } from 'react';
import classnames from 'classnames';
import s from './License.css';


function License(props) {
  const className = classnames(s.license, props.className);
  return (
    <div className={className}>

    </div>
  );
}
License.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string
};


export default License;
