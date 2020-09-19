import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export interface ISocialMedia {
    type : "github" | "linkedin" | "twitter" ;
    name: string;
    link: string;
}

export const getMediaIcon = (type : "github" | "linkedin" | "twitter") => {
    if (type === "github") {
        return faGithub;
    } else if (type === "twitter") {
        return faTwitter;
    } else if (type === "linkedin") {
        return faLinkedin;
    }
}