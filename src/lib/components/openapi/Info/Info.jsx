import React, { PropTypes } from 'react';
import classnames from 'classnames';
import CommonMark from 'lib/components/common/CommonMark';
import Heading from 'lib/components/common/Heading';
import Contact from 'lib/components/openapi/Contact';
import License from 'lib/components/openapi/License';
import s from './Info.css';


function Info(props) {
  const className = classnames(s.info, props.className);
  return (
    <section className={className}>
      <Heading
        id="info"
        level="h1"
      >
        { props.title }
      </Heading>
      <CommonMark>{ props.description }</CommonMark>
      { props.termsOfService ? <a href={props.termsOfService}>Terms of service</a> : null }
      <Contact {...props.contact} />
      { props.license ? <License {...props.license} /> : null }
    </section>
  );
}
Info.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  termsOfService: PropTypes.string,
  contact: PropTypes.object,
  license: PropTypes.object,
  version: PropTypes.string.isRequired
};


export default Info;
