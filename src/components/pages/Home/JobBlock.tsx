import {IJob} from "../../../model/Job";
import Moment from "moment";
import React from "react";
import {JobDate} from "./JobDate";
import {JobHeadline} from "./JobHeadline";

interface IProps {
    job: IJob,
    index: number
}

const JobBlock = ({job, index}: IProps) => {

    const experienceDatesFirst = (index: number): boolean => {
        return [0, 1, 4, 5, 8, 9, 12, 13].find(left => left == index) !== undefined;
    }

    return (
        <>
            {experienceDatesFirst(index) && (
                <>
                    <JobDate job={job}/>
                    <JobHeadline job={job}/>
                </>
            )}

            {!experienceDatesFirst(index) && (
                <>
                    <JobHeadline job={job}/>
                    <JobDate job={job}/>
                </>
            )}

        </>
    )
}

export {JobBlock}