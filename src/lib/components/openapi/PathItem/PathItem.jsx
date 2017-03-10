import React, { PropTypes } from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import Operation from 'lib/components/openapi/Operation';
import Summary from 'lib/components/openapi/Summary';
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
    <div className={className}>
      <Summary summary={props.summary} />
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
    </div>
  );
}
PathItem.propTypes = {
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
