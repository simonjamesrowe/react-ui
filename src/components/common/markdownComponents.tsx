import React from "react";
import {Components} from "react-markdown";

const ExternalLink: Components["a"] = ({node: _node, ...props}) => (
    <a {...props} target={props.target ?? "_blank"} rel={props.rel ?? "noreferrer"} />
);

export {ExternalLink};
