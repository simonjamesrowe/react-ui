import axios from "axios";
import { ITag } from "./BlogService";

class TagService {
  public getAll = async () => {
    const response = await axios.get<ITag[]>(
      "https://api.simonjamesrowe.com/tags?_sort=name:asc"
    );
    const tags = response.data;
    return tags;
  };
}

export { TagService };
