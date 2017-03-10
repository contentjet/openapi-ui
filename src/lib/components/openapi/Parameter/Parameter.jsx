import React, { PropTypes } from 'react';
import classnames from 'classnames';
import CommonMark from 'lib/components/common/CommonMark';
import List from 'lib/components/common/List';
import LabelValueListItem from 'lib/components/common/LabelValueListItem';
import s from './Parameter.css';


const defaultStyles = {
  query: 'form',
  header: 'simple',
  path: 'simple',
  cookie: 'form'
};


function Parameter(props) {
  const className = classnames(s.parameter, props.className);

  let style = props.style || defaultStyles[props.in];

  if (props.description) {
    var description = (
      <LabelValueListItem label="Description">
        <CommonMark>{ props.description }</CommonMark>
      </LabelValueListItem>
    );
  }

  if (props.explode) {
    var explode = (
      <LabelValueListItem label="Explode">
        Yes
      </LabelValueListItem>
    );
  }

  if (props.allowReserved) {
    var allowReserved = (
      <LabelValueListItem label="Allow reserved">
        Yes
      </LabelValueListItem>
    );
  }

  return (
    <div className={className}>
      <List>
        <LabelValueListItem label="Name">
          { props.name }
        </LabelValueListItem>

        { description }

        <LabelValueListItem label="Style">
          { style }
        </LabelValueListItem>

        { explode }

        { allowReserved }
      </List>
    </div>
  );
}
Parameter.propTypes = {
  name: PropTypes.string.isRequired,
  in: PropTypes.oneOf(['query', 'header', 'path', 'cookie']).isRequired,
  description: PropTypes.string,
  required: PropTypes.bool,
  deprecated: PropTypes.bool,
  allowEmptyValue: PropTypes.bool,

  style: PropTypes.oneOf(['matrix', 'label', 'form', 'simple', 'spaceDelimited', 'pipeDelimited', 'deepObject']),
  explode: PropTypes.bool,
  allowReserved: PropTypes.bool,
  schema: PropTypes.object,
  examples:	PropTypes.array,
  example: PropTypes.object,

  content: PropTypes.object
};


export default Parameter;
