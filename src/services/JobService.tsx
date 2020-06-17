import axios from "axios";
import {IImage} from "./ProfileService";
import {properties} from "./Environment";

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
      `${properties.apiUrl}/jobs?_sort=startDate:desc`
    );
    const jobs = response.data;
    return jobs;
  };
}

export { JobService };