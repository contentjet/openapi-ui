import React, { PropTypes } from 'react';
import classnames from 'classnames';
import List from 'lib/components/common/List';
import s from './SecurityRequirement.css';


function SecurityRequirement(props) {
  const className = classnames(s.securityRequirement, props.className);
  return (
    <div className={className}>
      <List>
        {
          Object.keys(props.object).map(name => {
            return (
              <li key={name}>
                <span>{ name }</span>
                <ul>
                  {
                    props.object[name].map((value, i) => {
                      return (
                        <li key={`${value}-${i}`}>{ value }</li>
                      );
                    })
                  }
                </ul>
              </li>
            );
          })
        }
      </List>
    </div>
  );
}
SecurityRequirement.propTypes = {
  object: PropTypes.object
};


export default SecurityRequirement;
