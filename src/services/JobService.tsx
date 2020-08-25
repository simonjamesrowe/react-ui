import axios from "axios";
import {properties} from "./Environment";
import {IJob} from "../model/Job";
import {ActionCreator, Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {IJobState} from "../state/Store";
import {JobActions, JobActionTypes} from "../state/jobs/Actions";

export const getAllJobs: ActionCreator<
    ThunkAction<Promise<any>, IJobState, null, JobActions>
    > = () => {
  return async (dispatch: Dispatch) => {
    dispatch({type : JobActionTypes.LOADING});
    const response = await axios.get<IJob[]>(
        `${properties.apiUrl}/jobs?_sort=startDate:desc`
    );
    dispatch({
      jobs: response.data,
      type: JobActionTypes.GETALL
    });
  };
};

