import {IImage} from "./Image";

export interface IProfile {
    name: string;
    title: string;
    backgroundImage: IImage;
    profileImage: IImage;
    headline: string;
    description: string;
}