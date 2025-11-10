import React from "react";
import {IJob} from "../../../model/Job";
import {JobBlock} from "./JobBlock";
import ReactGA from "react-ga";
import {JobDetail} from "./JobDetail";
import {useNavigate, useParams, useLocation} from "react-router-dom";

interface IProps {
    jobs: IJob[];
}

const Resume = ({jobs}: IProps) => {
    const { id } = useParams<{ id?: string }>();
    const location = useLocation();
    const navigate = useNavigate();
    const [jobsDraw, setJobsDraw] = React.useState<{ [key: string]: boolean }>({});

    React.useEffect(() => {
        let newJobsDrawer = {};
        jobs.forEach(j => newJobsDrawer[j._id] = id == j._id);
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
        navigate(`/jobs/${id}`, { replace: true });
        setJobsDraw({...jobsDraw, [id]: true});
    };

    const collapseJobDrawer = (id: string) => {
        navigate('/', { replace: true });
        setJobsDraw({...jobsDraw, [id]: false});
    }

    return (<>
            <div className="port_experience_setions prt_toppadder80" id="experience">
                <div className="experience_section">
                    <div className="container">
                        <div className="row tour-experience">
                            <div className="col-md-12">
                                <div className="port_heading_wrapper text-center prt_bottompadder40">
                                    <div className="port_sub_heading_wrapper">
                                        <h2 className="port_sub_heading">Involvement</h2>
                                    </div>
                                    <h1 className="port_heading">My Experience</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {jobs.map((job, i) => (
                                <div className="col-lg-6 col-md-12" key={job._id}>
                                    <div className={experienceBoxStyle(i)}>
                                        <div className="row pointer tour-experience-1"
                                             onClick={() => expandJobDrawer(job._id, job.title)}>
                                            <JobBlock job={job} index={i}/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {jobs.map(job => (
                            <JobDetail
                                key={`drawer-${job._id}`}
                                open={jobsDraw[job._id]}
                                job={job}
                                close={() => collapseJobDrawer(job._id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Resume
