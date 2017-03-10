import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Heading from 'lib/components/common/Heading';
import CommonMark from 'lib/components/common/CommonMark';
import s from './ExternalDocumentation.css';


function ExternalDocumentation(props) {
  const className = classnames(s.externalDocumentation, props.className);
  return (
    <section className={className}>
      <Heading
        className={s.heading}
        level="h2"
      >
        External documentation
      </Heading>
      <CommonMark>{ props.description }</CommonMark>
      <a
        className={s.url}
        href={props.url}
      >
        { props.url }
      </a>
    </section>
  );
}
ExternalDocumentation.propTypes = {
  url: PropTypes.string.isRequired,
  description: PropTypes.string,
};


export default ExternalDocumentation;
