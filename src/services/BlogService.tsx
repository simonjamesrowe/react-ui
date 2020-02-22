import axios from "axios";
import { IImage } from "./ProfileService";

export interface IBlog {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  published: boolean;
  image: IImage[];
  imageUrl?: string;
  createdAt: Date;
  tags: ITag[];
}

export interface ITag {
  name: string;
}

class BlogService {
  public getAll = async () => {
    const response = await axios.get<IBlog[]>(
      "https://api.simonjamesrowe.com/blogs?published=true&_sort=createdAt:desc"
    );
    const blogs = response.data;
    blogs.forEach(blog => {
      if (blog.image.length > 0) {
        blog.imageUrl = "https://api.simonjamesrowe.com" + blog.image[0].url;
      }
    });
    return blogs;
  };

  public get = async (id: string) => {
    const response = await axios.get<IBlog>(
      `https://api.simonjamesrowe.com/blogs/${id}`
    );
    const blog = response.data;
    if (blog.image.length > 0) {
      blog.imageUrl = "https://api.simonjamesrowe.com" + blog.image[0].url;
    }
    return blog;
  };
}

export { BlogService };
