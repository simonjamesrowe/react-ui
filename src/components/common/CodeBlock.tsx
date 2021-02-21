import React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {coy} from "react-syntax-highlighter/dist/cjs/styles/prism";

interface IProps {
    value: string;
    language: string;
}

const CodeBlock = ({value,language} : IProps) => {
    return (
        <SyntaxHighlighter language={language} style={coy}>
            {value}
        </SyntaxHighlighter>
    );
}

export {CodeBlock};