import React from "react";

export class ContentHelper {
    createMarkup(content: string) {
        return {__html: content};
    }

    pageContent(content: string) {
        return <div dangerouslySetInnerHTML={this.createMarkup(content)}></div>
    }
}