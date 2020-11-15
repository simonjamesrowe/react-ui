import {IImage} from "./Image";

export interface IProfile {
    name: string;
    title: string;
    backgroundImage: IImage;
    profileImage: IImage;
    headline: string;
    description: string;
    cv: IImage;
    location: string;
    phoneNumber: string;
    primaryEmail: string;
    secondaryEmail: string;
    sidebarImage: IImage;
    mobileBackgroundImage: IImage;
}