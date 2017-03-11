import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Heading from 'lib/components/common/Heading';
import CommonMark from 'lib/components/common/CommonMark';
import s from './ExternalDocumentation.css';


function ExternalDocumentation(props) {
  const className = classnames(s.externalDocumentation, props.className);
  return (
    <section className={className}>
      <Heading level={props.headingLevel}>
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
  headingLevel: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};
ExternalDocumentation.defaultProps = {
  headingLevel: 'h2'
};


export default ExternalDocumentation;
