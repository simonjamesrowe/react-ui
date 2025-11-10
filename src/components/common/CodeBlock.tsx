import React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {coy} from "react-syntax-highlighter/dist/cjs/styles/prism";
import {Components} from "react-markdown";

const CodeBlock: Components["code"] = ({
    inline,
    className,
    children,
    node: _node,
    ...props
}) => {
    const match = /language-(\w+)/.exec(className ?? "");
    if (!inline && match) {
        const content = String(children ?? "").replace(/\n$/, "");
        return (
            <SyntaxHighlighter
                language={match[1]}
                style={coy}
                PreTag="div"
                {...props}
            >
                {content}
            </SyntaxHighlighter>
        );
    }

    return (
        <code className={className} {...props}>
            {children}
        </code>
    );
};

export {CodeBlock};
