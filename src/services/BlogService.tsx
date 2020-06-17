import axios from "axios";
import {IImage} from "./ProfileService";
import {properties} from "./Environment";

export interface IBlog {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  published: boolean;
  image: IImage;
  createdAt: Date;
  tags: ITag[];
}

export interface ITag {
  name: string;
}

class BlogService {
  public getAll = async (limit?: number) => {
    let queryString =
      `${properties.apiUrl}/blogs?published=true&_sort=createdAt:desc`;
    if (limit) {
      queryString += `&_limit=${limit}`;
    }
    const response = await axios.get<IBlog[]>(queryString);
    const blogs = response.data;

    return blogs;
  };

  public get = async (id: string) => {
    const response = await axios.get<IBlog>(
      `${properties.apiUrl}/blogs/${id}`
    );
    const blog = response.data;
    return blog;
  };
}

export { BlogService };
