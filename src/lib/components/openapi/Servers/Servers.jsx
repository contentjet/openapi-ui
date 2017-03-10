import React, { PropTypes } from 'react';
import classnames from 'classnames';
import List from 'lib/components/common/List';
import Heading from 'lib/components/common/Heading';
import Server from 'lib/components/openapi/Server';
import s from './Servers.css';


function Servers(props) {
  if (!props.servers) return null;
  const className = classnames(s.servers, props.className);
  return (
    <div className={className}>
      <Heading
        className={s.heading}
        level={props.headingLevel}
      >
        Servers
      </Heading>
      <List>
        {
          props.servers.map((server, i) => {
            return (
              <li key={i}>
                <Server {...server} />
              </li>
            );
          })
        }
      </List>
    </div>
  );
}
Servers.propTypes = {
  servers: PropTypes.array,
  headingLevel: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
Servers.defaultProps = {
  headingLevel: 'h2'
};


export default Servers;
