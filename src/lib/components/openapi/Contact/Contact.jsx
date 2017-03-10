import React, { PropTypes } from 'react';
import classnames from 'classnames';
import s from './Contact.css';


function Contact(props) {
  const className = classnames(s.contact, props.className);
  return (
    <div className={className}>

    </div>
  );
}
Contact.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  email: PropTypes.string
};


export default Contact;
