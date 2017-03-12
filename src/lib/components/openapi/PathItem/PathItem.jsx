import React, { PropTypes } from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import Heading from 'lib/components/common/Heading';
import Operation from 'lib/components/openapi/Operation';
import CommonMark from 'lib/components/common/CommonMark';
import { operationMethods } from 'constants';
import s from './PathItem.css';


const mergeParameters = (pathItemParameters = [], operationParameters = []) => {
  let parameters = pathItemParameters.concat(operationParameters).reverse();
  parameters = _.uniqBy(parameters, parameter => `${parameter.name}${parameter.in}`);
  parameters = parameters.reverse();
  return parameters;
};


function PathItem(props) {
  const className = classnames(s.pathItem, props.className);
  return (
    <section className={className}>
      <header className={s.header}>
        <Heading
          className={s.heading}
          level="h3"
        >
          { props.path }
        </Heading>
        <span className={s.summary}>{props.summary}</span>
      </header>
      <CommonMark>{ props.description }</CommonMark>
      {
        operationMethods
        .filter(method => props[method])
        .map(method => {
          let operation = props[method];
          let parameters = mergeParameters(props.parameters, operation.parameters);
          return (
            <Operation
              {...operation}
              key={method}
              parameters={parameters}
              method={method}
            />
          );
        })
      }
    </section>
  );
}
PathItem.propTypes = {
  path: PropTypes.string.isRequired,
  summary: PropTypes.string,
  description: PropTypes.string,
  get: PropTypes.object,
  put: PropTypes.object,
  post: PropTypes.object,
  delete: PropTypes.object,
  options: PropTypes.object,
  head: PropTypes.object,
  patch: PropTypes.object,
  trace: PropTypes.object,
  servers: PropTypes.array,
  parameters: PropTypes.array
};


export default PathItem;
