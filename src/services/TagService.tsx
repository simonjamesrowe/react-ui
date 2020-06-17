import axios from "axios";
import { ITag } from "./BlogService";
import {properties} from "./Environment";

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
