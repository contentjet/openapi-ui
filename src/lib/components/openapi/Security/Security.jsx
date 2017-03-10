import React, { PropTypes } from 'react';
import classnames from 'classnames';
import List from 'lib/components/common/List';
import Heading from 'lib/components/common/Heading';
import SecurityRequirement from 'lib/components/openapi/SecurityRequirement';
import s from './Security.css';


function Security(props) {
  if (!props.securityRequirements || !props.securityRequirements.length) return null;
  const className = classnames(s.security, props.className);
  return (
    <div className={className}>
      <Heading level={props.headingLevel}>Security</Heading>
      <List>
        {
          props.securityRequirements.map((securityRequirement, i) => {
            return (
              <li key={i}>
                <SecurityRequirement object={securityRequirement} />
              </li>
            );
          })
        }
      </List>
    </div>
  );
}
Security.propTypes = {
  securityRequirements: PropTypes.array,
  headingLevel: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};


export default Security;
