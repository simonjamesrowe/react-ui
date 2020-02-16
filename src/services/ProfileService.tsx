import axios from "axios";

export interface IImage {
  url: string;
  name: string;
}

export interface IProfile {
  name: string;
  title: string;
  backgroundImage: IImage[];
}

class ProfileService {
  public getProfile = async () => {
    const response = await axios.get<IProfile[]>(
      "https://api.simonjamesrowe.com/profiles"
    );
    const profile = response.data[0];
    if (profile.backgroundImage.length > 0) {
      profile.backgroundImage[0].url =
        "https://api.simonjamesrowe.com/" + profile.backgroundImage[0].url;
    }
    return profile;
  };
}

export { ProfileService };
