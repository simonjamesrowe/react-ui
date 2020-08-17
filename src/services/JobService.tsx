import axios from "axios";
import {properties} from "./Environment";
import {IJob} from "../model/Job";



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