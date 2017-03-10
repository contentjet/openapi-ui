import React, { PropTypes } from 'react';
import classnames from 'classnames';
import CommonMark from 'lib/components/common/CommonMark';
import s from './Content.css';


function Content(props) {
  const className = classnames(s.content, props.className);
  return (
    <div className={className}>
      <CommonMark>{props.description}</CommonMark>
    </div>
  );
}
Content.propTypes = {
  description: PropTypes.string,
  content: PropTypes.object,
  required: PropTypes.bool,
};


export default Content;
