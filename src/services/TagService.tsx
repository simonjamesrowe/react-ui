import axios from "axios";
import {properties} from "./Environment";
import {ITag} from "../model/Tag";

class TagService {
  public getAll = async () => {
    const response = await axios.get<ITag[]>(
      `${properties.apiUrl}/tags?_sort=name:asc`
    );
    const tags = response.data;
    return tags;
  };
}

export { TagService };
