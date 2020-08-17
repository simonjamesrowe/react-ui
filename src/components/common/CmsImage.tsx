import React from "react";
import {properties} from "../../services/Environment";
import {IImage} from "../../model/Image";

interface IImageProperties {
  src?: IImage;
}

const CmsImage = (props: IImageProperties) => {
  return (
    <>
      {props.src && (
        <img
          src={`${properties.apiUrl}${props.src.url}`}
          alt={props.src.name}
        />
      )}
    </>
  );
};

export { CmsImage };
