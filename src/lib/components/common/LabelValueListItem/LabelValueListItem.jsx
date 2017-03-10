import React, { PropTypes } from 'react';
import classnames from 'classnames';
import s from './LabelValueListItem.css';


function LabelValueListItem(props) {
  const className = classnames(s.labelValueListItem, props.className);
  return (
    <li className={className}>
      <span className={classnames(s.label, props.labelClassName)}>
        { props.label }
      </span>
      <span className={classnames(s.value, props.valueClassName)}>
        { props.children }
      </span>
    </li>
  );
}
LabelValueListItem.propTypes = {
  label: PropTypes.string.isRequired,
  labelClassName: PropTypes.string,
  valueClassName: PropTypes.string
};


export default LabelValueListItem;
