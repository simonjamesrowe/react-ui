export interface IImage {
    url: string;
    name: string;
    size: number;
    width: number;
    height: number;
    mime: string;
    formats?: IImageFormats;
}

export interface IImageFormats {
    thumbnail?: IImage;
    large?: IImage;
    medium?: IImage;
    small?: IImage;
}