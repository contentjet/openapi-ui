import React, { PropTypes } from 'react';
import classnames from 'classnames';
import List from 'lib/components/common/List';
import s from './ServerVariable.css';


function ServerVariable(props) {
  const className = classnames(s.serverVariable, props.className);
  return (
    <div className={className}>
      <List>
        <li><span>Default</span><span>{ props.default }</span></li>
        <li><span>Enum</span><span>{ props.enum }</span></li>
        <li><span>Description</span><span>{ props.description }</span></li>
      </List>
    </div>
  );
}
ServerVariable.propTypes = {
  enum: PropTypes.array,
  default: PropTypes.node,
  description: PropTypes.string
};


export default ServerVariable;
