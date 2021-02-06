
export interface ISiteResult {
    type: string;
    hits: IHit[];
}

export interface IHit {
    name: string;
    imageUrl: string;
    link: string;
}
