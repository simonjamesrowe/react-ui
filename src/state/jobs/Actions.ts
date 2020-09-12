import {IJob} from "../../model/Job";

export enum JobActionTypes {
    GETALL = "JOBS/GETALL",
    LOADING = "JOBS/LOADING"
}

export interface IJobsGetAllAction {
    type: JobActionTypes.GETALL,
    jobs: IJob[]
}

export interface IJobLoadingAction {
    type: JobActionTypes.LOADING
}

export type JobActions = IJobsGetAllAction | IJobLoadingAction