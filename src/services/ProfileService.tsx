import axios from "axios";
import {properties} from "./Environment";
import {IProfile} from "../model/Profile";


class ProfileService {
  public getProfile = async () => {
    const response = await axios.get<IProfile[]>(
      `${properties.apiUrl}/profiles`
    );
    const profile = response.data[0];
    return profile;
  };
}

export { ProfileService };
