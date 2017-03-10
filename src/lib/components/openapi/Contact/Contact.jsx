import React, { PropTypes } from 'react';
import classnames from 'classnames';
import List from 'lib/components/common/List';
import Heading from 'lib/components/common/Heading';
import LabelValueListItem from 'lib/components/common/LabelValueListItem';
import s from './Contact.css';


function Contact(props) {
  if (!props.name && !props.url && !props.email) return null;
  const className = classnames(s.contact, props.className);
  return (
    <address className={className}>
      <Heading level="h3">Contact</Heading>
      <List>
        <LabelValueListItem label="Name">
          { props.name }
        </LabelValueListItem>
        <LabelValueListItem label="URL">
          { props.url }
        </LabelValueListItem>
        <LabelValueListItem label="Email">
          { props.email }
        </LabelValueListItem>
      </List>
    </address>
  );
}
Contact.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  email: PropTypes.string
};


export default Contact;
