import {IImage} from "./Image";

export interface IJob {
    _id: string;
    startDate: Date;
    endDate?: Date;
    company: string;
    companyUrl: string;
    shortDescription: string;
    companyImage: IImage;
    title: string;
}