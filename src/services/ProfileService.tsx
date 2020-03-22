import axios from "axios";

export interface IImage {
  url: string;
  name: string;
}

export interface IProfile {
  name: string;
  title: string;
  backgroundImage: IImage;
  profileImage: IImage;
  headline: string;
  description: string;
}

class ProfileService {
  public getProfile = async () => {
    const response = await axios.get<IProfile[]>(
      "https://api.simonjamesrowe.com/profiles"
    );
    const profile = response.data[0];
    return profile;
  };
}

export { ProfileService };
