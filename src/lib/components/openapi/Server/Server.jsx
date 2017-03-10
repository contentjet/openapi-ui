import React, { PropTypes } from 'react';
import classnames from 'classnames';
import CommonMark from 'lib/components/common/CommonMark';
import Heading from 'lib/components/common/Heading';
import ServerVariables from 'lib/components/openapi/ServerVariables';
import s from './Server.css';


function Server(props) {
  const className = classnames(s.server, props.className);
  return (
    <div className={className}>
      <Heading level="h3">
        { props.url }
      </Heading>
      <CommonMark>{ props.description }</CommonMark>
      <ServerVariables variables={props.variables} />
    </div>
  );
}
Server.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
  variables: PropTypes.object
};


export default Server;
