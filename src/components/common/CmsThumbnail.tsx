import React, {CSSProperties} from "react";
import {properties} from "../../services/Environment";
import {IImage} from "../../model/Image";

interface IImageProperties {
  src?: IImage;
}

const CmsThumbnail = (props: IImageProperties) => {
  const thumbnailStype : CSSProperties = {
    height: "25px",
    width : "25px"
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
