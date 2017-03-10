import React, { PropTypes } from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import List from 'lib/components/common/List';
import ServerVariable from 'lib/components/openapi/ServerVariable';
import s from './ServerVariables.css';


function ServerVariables(props) {
  if (!props.variables) return null;
  const className = classnames(s.serverVariables, props.className);
  return (
    <div className={className}>
      <List>
        {
          Object.keys(props.variables).map(name => {
            return (
              <li key={name}>
                <span>{ name }</span>
                <ServerVariable
                  enum={_.get(props.variables, 'enum')}
                  default={_.get(props.variables, 'default')}
                  description={_.get(props.variables, 'description')}
                />
              </li>
            );
          })
        }
      </List>
    </div>
  );
}
ServerVariables.propTypes = {
  variables: PropTypes.object
};


export default ServerVariables;
