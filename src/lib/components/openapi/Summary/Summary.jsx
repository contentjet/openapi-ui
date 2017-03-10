import React, { PropTypes } from 'react';
import classnames from 'classnames';
import s from './Summary.css';


function Summary(props) {
  if (!props.summary) return null;
  const className = classnames(s.summary, props.className);
  return (
    <div className={className}>
      <h3>Summary</h3>
      <span>{ props.summary }</span>
    </div>
  );
}
Summary.propTypes = {
  summary: PropTypes.string
};


export default Summary;
