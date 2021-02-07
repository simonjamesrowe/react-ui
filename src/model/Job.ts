import {IImage} from "./Image";
import {ISkill} from "./Skill";

export interface IJob {
    _id: string;
    startDate: Date;
    endDate?: Date;
    company: string;
    companyUrl: string;
    shortDescription: string;
    longDescription: string;
    companyImage: IImage;
    title: string;
    skills: ISkill[];
}