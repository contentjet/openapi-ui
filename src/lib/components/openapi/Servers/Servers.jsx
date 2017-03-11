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
    <section className={className}>
      <Heading level={props.headingLevel}>
        Servers
      </Heading>
      <List>
        {
          props.servers.map(server => {
            return (
              <li key={server.url}>
                <Server {...server} />
              </li>
            );
          })
        }
      </List>
    </section>
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
