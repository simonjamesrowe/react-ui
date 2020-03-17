import React from "react";
import { IImage } from "./../../services/ProfileService";

interface IImageProperties {
  src?: IImage;
}

const CmsImage = (props: IImageProperties) => {
  return (
    <>
      {props.src && (
        <img
          src={"https://api.simonjamesrowe.com" + props.src.url}
          alt={props.src.name}
        />
      )}
    </>
  );
};

export { CmsImage };
