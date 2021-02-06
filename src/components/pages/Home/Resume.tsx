import React from "react";
import {IJob} from "../../../model/Job";
import {JobBlock} from "./JobBlock";
import ReactGA from "react-ga";
import {JobDetail} from "./JobDetail";
import {RouteComponentProps, useHistory, withRouter} from "react-router-dom";

interface IProps extends RouteComponentProps<{ id?: string }> {
    jobs: IJob[];
}

const Resume = ({jobs, match, location}: IProps & RouteComponentProps<{ id?: string }>) => {
    const history = useHistory();
    const [jobsDraw, setJobsDraw] = React.useState<{ [key: string]: boolean }>({});

    React.useEffect(() => {
        let newJobsDrawer = {};
        jobs.forEach(j => newJobsDrawer[j._id] = match.params.id == j._id);
        setJobsDraw(newJobsDrawer);
    }, [jobs, location]);

    const experienceBoxStyle = (index: number): string => {
        if ([0, 1, 4, 5, 8, 9, 12, 13].find(left => left == index) !== undefined) {
            return "exprince_box ex_leftsidebox";
        }
        return "exprince_box ex_rightsidebox";
    }

    const expandJobDrawer = (id: string, name: string) => {
        ReactGA.event({
            category: "Job",
            action: `Job Expanded: ${name}`,
        });
        history.replace(`/jobs/${id}`);
        setJobsDraw({...jobsDraw, [id]: true});
    };

    const collapseJobDrawer = (id: string) => {
        history.replace('/');
        setJobsDraw({...jobsDraw, [id]: false});
    }

    return (<>
            <div className="port_experience_setions prt_toppadder80" id="experience">
                <div className="experience_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="port_heading_wrapper text-center prt_bottompadder40">
                                    <div className="port_sub_heading_wrapper">
                                        <h2 className="port_sub_heading">Involvement</h2>
                                    </div>
                                    <h1 className="port_heading">My Experience</h1>
                                </div>
                            </div>
                        </div>
                        {jobs.map(job => (
                            <JobDetail open={jobsDraw[job._id]} job={job}
                                       close={() => collapseJobDrawer(job._id)}/>
                        ))}
                        <div className="row">
                            {jobs.map((job, i) => (
                                <>
                                    <div className="col-lg-6 col-md-12">
                                        <div className={experienceBoxStyle(i)}>
                                            <div className="row pointer"
                                                 onClick={() => expandJobDrawer(job._id, job.title)}>
                                                <JobBlock job={job} index={i}/>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default withRouter(Resume)
