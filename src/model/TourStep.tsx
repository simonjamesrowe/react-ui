import {IImage} from "./Image";
import React, {ReactElement} from "react";
import Tour from "../components/common/Tour";
import {properties} from "../services/Environment";
import ReactMarkdown from "react-markdown";

export interface TourStep {
    title: string;
    selector: string;
    description: string;
    titleImage?: IImage;
    position?: string;
    order: number;
}

export interface Step {
    element: string;
    title: string;
    position?: string;
    intro: ReactElement;
}

export const mapStep = (tourStep: TourStep) : Step => {
    let image: string = ""
    if (tourStep.titleImage?.formats?.thumbnail?.url) {
      image = `<img className="tour-title-img" src="${properties.apiUrl}${tourStep.titleImage.formats?.thumbnail?.url}"/>`;
    }
    return {
      element : tourStep.selector,
      title: `${image} ${tourStep.title}`,
      intro: <ReactMarkdown source={tourStep.description} linkTarget="_blank"/>,
      position: tourStep.position
    };
}