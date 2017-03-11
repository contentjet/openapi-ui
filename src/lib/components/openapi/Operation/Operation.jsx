import React, { PropTypes } from 'react';
import classnames from 'classnames';
import CommonMark from 'lib/components/common/CommonMark';
import Heading from 'lib/components/common/Heading';
import Summary from 'lib/components/openapi/Summary';
import RequestBody from 'lib/components/openapi/RequestBody';
import Parameters from 'lib/components/openapi/Parameters';
import Security from 'lib/components/openapi/Security';
import ExternalDocumentation from 'lib/components/openapi/ExternalDocumentation';
import s from './Operation.css';


function Operation(props) {
  const className = classnames(s.operation, props.className);

  const headingClassName = classnames(s.heading, {
    [s.methodGet]: props.method === 'get',
    [s.methodPut]: props.method === 'put',
    [s.methodPost]: props.method === 'post',
    [s.methodDelete]: props.method === 'delete',
    [s.methodOptions]: props.method === 'options',
    [s.methodHead]: props.method === 'head',
    [s.methodPatch]: props.method === 'patch',
    [s.methodTrace]: props.method === 'trace'
  });

  return (
    <div
      id={props.operationId}
      className={className}
    >
      <Heading
        className={headingClassName}
        level="h4"
      >
        { props.method }
      </Heading>
      <Summary summary={props.summary} />
      <CommonMark>{props.description}</CommonMark>
      {
        props.externalDocs &&
        <ExternalDocumentation 
          {...props.externalDocs}
          headingLevel="h5"
        />
      }
      <Parameters parameters={props.parameters} />
      <Security
        headingLevel="h5"
        securityRequirements={props.security}
      />
      <RequestBody {...props.requestBody} />
    </div>
  );
}
Operation.propTypes = {
  method: PropTypes.string,
  tags: PropTypes.array,
  summary: PropTypes.string,
  description: PropTypes.string,
  externalDocs: PropTypes.object,
  operationId: PropTypes.string,
  parameters: PropTypes.array,
  requestBody: PropTypes.object,
  responses: PropTypes.object.isRequired,
  callbacks: PropTypes.object,
  deprecated: PropTypes.bool,
  security: PropTypes.object,
  servers: PropTypes.array
};


export default Operation;
