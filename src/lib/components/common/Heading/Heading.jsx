import React, { PropTypes } from 'react';
import _ from 'lodash';


function Heading(props) {
  const { level } = props;
  const finalProps = _.omit(props, 'level');
  if (level === 'h1') return <h1 {...finalProps} />;
  if (level === 'h2') return <h2 {...finalProps} />;
  if (level === 'h3') return <h3 {...finalProps} />;
  if (level === 'h4') return <h4 {...finalProps} />;
  if (level === 'h5') return <h5 {...finalProps} />;
  if (level === 'h6') return <h6 {...finalProps} />;
}
Heading.propTypes = {
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
Heading.defaultProps = {
  level: 'h1'
};


export default Heading;
