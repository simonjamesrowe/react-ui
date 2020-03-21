import axios from "axios";
import { IImage } from "./ProfileService";

export interface IJob {
  _id: string;
  startDate: Date;
  endDate?: Date;
  company: string;
  companyUrl: string;
  shortDescription: string;
  companyImage: IImage;
  title: string;
}

class JobService {
  public getAll = async () => {
    const response = await axios.get<IJob[]>(
      "https://api.simonjamesrowe.com/jobs?_sort=startDate:desc"
    );
    const jobs = response.data;
    return jobs;
  };
}

export { JobService };
