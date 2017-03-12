import React, { PropTypes } from 'react';
import classnames from 'classnames';
import CommonMark from 'lib/components/common/CommonMark';
import Heading from 'lib/components/common/Heading';
import RequestBodies from 'lib/components/openapi/RequestBodies';
import Parameters from 'lib/components/openapi/Parameters';
import Security from 'lib/components/openapi/Security';
import ExternalDocumentation from 'lib/components/openapi/ExternalDocumentation';
import s from './Operation.css';


function Operation(props) {
  const className = classnames(s.operation, props.className);

  const headerClassName = classnames(s.header, {
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
    <section
      id={props.operationId}
      className={className}
    >
      <header className={headerClassName}>
        <Heading
          className={s.heading}
          level="h4"
        >
          <span className={s.inner}>{ props.method }</span>
        </Heading>
        <span className={s.summary}>{props.summary}</span>
      </header>
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
      <RequestBodies requestBodies={props.requestBody} />
    </section>
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
  requestBody: PropTypes.array,
  responses: PropTypes.object.isRequired,
  callbacks: PropTypes.object,
  deprecated: PropTypes.bool,
  security: PropTypes.object,
  servers: PropTypes.array
};


export default Operation;
