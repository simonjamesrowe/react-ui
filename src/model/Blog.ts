import {IImage} from "./Image";
import {ITag} from "./Tag";

export interface IBlog {
    id: string;
    title: string;
    shortDescription: string;
    content: string;
    published: boolean;
    image: IImage;
    createdAt: Date;
    tags: ITag[];
}

export interface IBlogSearchResult {
    id: string;
    title: string;
    shortDescription: string;
    tags: string[];
    skills: string[];
    thumbnailImage: string;
    smallImage?: string;
    mediumImage?: string;
    createdDate: Date;
}