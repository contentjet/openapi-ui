import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Heading from 'lib/components/common/Heading';
import s from './Summary.css';


function Summary(props) {
  if (!props.summary) return null;
  const className = classnames(s.summary, props.className);
  return (
    <div className={className}>
      <Heading level="h3">Summary</Heading>
      <span>{ props.summary }</span>
    </div>
  );
}
Summary.propTypes = {
  summary: PropTypes.string
};


export default Summary;
