import React, { PropTypes } from 'react';
import classnames from 'classnames';
import List from 'lib/components/common/List';
import Heading from 'lib/components/common/Heading';
import LabelValueListItem from 'lib/components/common/LabelValueListItem';
import s from './License.css';


function License(props) {
  const className = classnames(s.license, props.className);
  return (
    <section className={className}>
      <Heading level="h3">License</Heading>
      <List>
        <LabelValueListItem label="Name">
          { props.name }
        </LabelValueListItem>
        <LabelValueListItem label="URL">
          <a href={props.url}>{ props.url }</a>
        </LabelValueListItem>
      </List>
    </section>
  );
}
License.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string
};


export default License;
