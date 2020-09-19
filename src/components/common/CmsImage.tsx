import React from "react";
import {properties} from "../../services/Environment";
import {IImage} from "../../model/Image";

interface IImageProperties {
  src?: IImage;
  type?: ImageType;
}

type ImageType = "thumbnail" | "large" | "small" | "medium";

const CmsImage = ({src, type}: IImageProperties) => {
  return (
    <>
      {src && (!type || (type && !src.formats!![type] ))  && (
        <img
          src={`${properties.apiUrl}${src.url}`}
          alt={src.name}
        />
      )}
      {type && src && src.formats!![type]  && (
          <img
              src={`${properties.apiUrl}${src.formats!![type]!!.url}`}
              alt={src.name}
          />
      )}

    </>
  );
};

export { CmsImage };
