import {IImage} from "./Image";

export interface ISkillGroup {
    _id: string,
    name : string,
    rating: number,
    order: number,
    description?: string,
    image?: IImage,
    skills : ISkill[],
    open : boolean
}

export interface ISkill {
    name: string,
    rating: number,
    order: number,
    description?: string,
    image? : IImage
}

export const getVariant = (rating: number) :  "success" | "danger" | "warning" | "info" | undefined => {
    if (rating >= 9) {
        return "success";
    } else if (rating > 8.5) {
        return "info";
    } else {
        return "warning";
    }
}