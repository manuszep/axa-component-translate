import React, { Component } from "react";
import { getTranslation } from "./utils";

/**
 * This is a simple wrapper to inject HTML translated content in JSX.
 */
class TranslateLabel extends Component {

  render() {
    const { tag, children, ...rest } = this.props;
    const translatedString = getTranslation(children);

    if (typeof tag !== "undefined") {
      const CustomTag = tag;

      return (
        <CustomTag dangerouslySetInnerHTML={{ "__html": translatedString }} {...rest} />
      );
    }

    return (
      <span dangerouslySetInnerHTML={{ __html: translatedString }} {...rest} />
    );
  }
}

export default TranslateLabel;
