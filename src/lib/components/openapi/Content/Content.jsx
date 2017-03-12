import React, { PropTypes } from 'react';
import _ from 'lodash';
import classnames from 'classnames';
import MediaType from 'lib/components/openapi/MediaType';
import s from './Content.css';


function Content(props) {
  if (!props.content) return null;
  const className = classnames(s.content, props.className);
  return (
    <div className={className}>
      {
        _.map(props.content, (value, key) => {
          return (
            <MediaType
              {...value}
              key={key}
              mediaType={key}
            />
          );
        })
      }
    </div>
  );
}
Content.propTypes = {
  content: PropTypes.object,
};


export default Content;
