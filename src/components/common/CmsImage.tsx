import React from "react";
import { IImage } from "../../services/ProfileService";
import {properties} from "../../services/Environment";

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
