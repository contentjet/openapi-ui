import React, { PropTypes } from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import s from './Heading.css';


function Heading(props) {
  const { level, className } = props;
  let finalProps = _.omit(props, 'level');
  finalProps.className = classnames(
    s.heading, {
      [s.h1]: level === 'h1',
      [s.h2]: level === 'h2',
      [s.h3]: level === 'h3',
      [s.h4]: level === 'h4',
      [s.h5]: level === 'h5',
      [s.h6]: level === 'h6'
    },
    className
  );
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
