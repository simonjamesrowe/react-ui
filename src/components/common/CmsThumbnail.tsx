import React, {CSSProperties} from "react";
import {properties} from "../../services/Environment";
import {IImage} from "../../model/Image";

interface IImageProperties {
  src?: IImage;
  size?: "small" | "medium" | "large" ;
}

const CmsThumbnail = (props: IImageProperties) => {
  let multiplier : number = 1
  if (props.size === "medium") {
    multiplier = 2;
  } else if (props.size === "large") {
    multiplier = 3;
  }
  const thumbnailStype : CSSProperties = {
    height: (25 * multiplier) + "px",
    width : (25 * multiplier) + "px"
  };
  return (
    <>
      {props.src && props.src.formats && props.src.formats.thumbnail && (
        <img
          src={`${properties.apiUrl}${props.src.formats.thumbnail.url}`}
          alt={props.src.name}
          style={thumbnailStype}
        />
      )}
    </>
  );
};

export { CmsThumbnail };
