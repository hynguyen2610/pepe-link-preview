import './toastr.min.css';
import './element.css';
import React from 'react';
var toastr = require("toastr")

export default function Element({meme}) {

    function copyLinkToClipboard() {
        navigator.clipboard.writeText(meme.url);
        toastr.info('Copied "' + meme.key + '" to clipboard!')
    }

    return (
        <div className="element">
            <div className="img-wrap">
                <img className="image" alt={meme.url} src={meme.url} onClick={copyLinkToClipboard} />
            </div>
            <span>blood</span>
        </div>
    );
}