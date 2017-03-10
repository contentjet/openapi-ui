import React, { Component, PropTypes } from 'react';
import commonmark from 'commonmark';


const reader = new commonmark.Parser();
const writer = new commonmark.HtmlRenderer();


class Markdown extends Component {
  constructor(props) {
    super(props);
    this.getHTML = this.getHTML.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.children !== this.props.children ||
      nextProps.className !== this.props.className
    );
  }

  getHTML() {
    let parsed = reader.parse(this.props.children);
    let result = writer.render(parsed);
    return { __html: result };
  }

  render() {
    if (!this.props.children) return null;
    return (
      <div
        className={this.props.className}
        dangerouslySetInnerHTML={this.getHTML()}
      />
    );
  }
}
Markdown.propTypes = {
  children: PropTypes.string
};


export default Markdown;
