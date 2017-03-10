import React, { PropTypes } from 'react';
import classnames from 'classnames';
import List from 'lib/components/common/List';
import LabelValueListItem from 'lib/components/common/LabelValueListItem';
import s from './ServerVariable.css';


function ServerVariable(props) {
  const className = classnames(s.serverVariable, props.className);
  return (
    <div className={className}>
      <List>
        <LabelValueListItem label="Name">
          { props.name }
        </LabelValueListItem>
        <LabelValueListItem label="Default">
          { props.default }
        </LabelValueListItem>
        <LabelValueListItem label="Enum">
          { props.enum }
        </LabelValueListItem>
        <LabelValueListItem label="Description">
          { props.description }
        </LabelValueListItem>
      </List>
    </div>
  );
}
ServerVariable.propTypes = {
  name: PropTypes.string.isRequired,
  enum: PropTypes.array,
  default: PropTypes.node.isRequired,
  description: PropTypes.string
};


export default ServerVariable;
