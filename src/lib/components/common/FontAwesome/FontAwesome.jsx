import React, { PropTypes } from 'react';
import classnames from 'classnames';
import 'font-awesome/css/font-awesome.css';


function FontAwesome(props) {
  const className = classnames('fa', 'fa-' + props.name, props.className);
  return (
    <i className={className} />
  );
}
FontAwesome.propTypes = {
  name: PropTypes.string
};


export default FontAwesome;
