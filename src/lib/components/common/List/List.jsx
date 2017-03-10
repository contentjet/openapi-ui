import React, { PropTypes } from 'react';
import classnames from 'classnames';
import s from './List.css';


function List(props) {
  let { children, inline } = props;
  let className = classnames(
    s.list,
    {
      [s.inline]: inline,
    },
    props.className
  );
  return (
    <ul className={className}>{children}</ul>
  );
}
List.propTypes = {
  inline: PropTypes.bool
};


export default List;
