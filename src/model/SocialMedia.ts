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

export const getMediaClass = (type : "github" | "linkedin" | "twitter")  => {
    if (type === "github") {
        return "fab nav_insta";
    } else if (type === "twitter") {
        return "fab nav_twit";
    } else if (type === "linkedin") {
        return "fab nav_in";
    }
}