import React from "react";

import workcoverImg from "../../assets/images/resume/workcover.jpg";
import uonImg from "../../assets/images/resume/uon.png";
import civicaImg from "../../assets/images/resume/civica.jpg";
import macquarieImg from "../../assets/images/resume/macquarie.png";
import umpgImg from "../../assets/images/resume/umpg.png";
import sasImg from "../../assets/images/resume/sas.png";

class Job {
  constructor(
    public company: string,
    public image: string,
    public period: string,
    public position: string,
    public description: string,
    public numberOfVisisbleParagraphs: number
  ) {}
}

const Resume = () => {
  const universal: Job = new Job(
    "Universal Music Publishing",
    umpgImg,
    "Jul 2011 - Present",
    "Director, Java Development",
    "<p>Responsible for architecture and delivery of greenfield internal and public facing business applications. " +
      "Super scrum master, removing obstacles for four dynamic scrum teams. Frequent commiter.</p>" +
      "<p>Re-architecture of multiple monoliths with single points of failure to AWS," +
      "resulting in scalable, fault tolerant software reducing the operational cost significantly.</p>" +
      "<p>Introduced automated testing as a development activity utilising technologies such as cucumber, selenium, " +
      "docker which allows for far shorter release cycles.</p>" +
      "<p>Designed the company's first 'serverless' application at AWS, Utilising ECS Fargate, Lambda, SQS, SNS, " +
      "ElasticSearch, S3.</p>",
    3
  );
  const workcover: Job = new Job(
    "Workcover Queensland",
    workcoverImg,
    "Nov 2009 - May 2011",
    "Senior Applications Developer",
    "<p>Analysis, Design, Development, Testing &amp; Documentation of enhancements to internal" +
      "and external facing web applications within an agile environment</p>" +
      "<p>Mentoring of less experienced developers</p>" +
      "<p>Technologies used: JEE, JSP, Spring, Ibatis, Tiles, HTML, JQuery, Oracle, Ruby," +
      "Cucumber, Watir, PowerMock, EasyMock, TeamCity, Weblogic. SVN, DWR, Jasper" +
      " Reports, Eclipse, SVN, CVS, Apache FOP, XML, XSLT.</p>",
    2
  );
  const macquarie: Job = new Job(
    "Macquarie Group",
    macquarieImg,
    "Feb 2008 - Nov 2009",
    "Analyst / Programmer",
    "<p>Design, Build, Test &amp; Document new software solutions across the Risk Management\n" +
      "Group</p>" +
      "<p>Maintain and Enhance existing systems.</p>" +
      "<p>Mentoring of junior developers.</p>" +
      "<p>Technologies Used: JEE, Java, JSP, HTML, JQuery, Dojo, Spring, Hibernate, Sybase," +
      "HSQLDB, SQL Server, Tiles, JUnit, Selenium, PHP</p>",
    2
  );
  const sas: Job = new Job(
    "SAS Asia Pacific",
    sasImg,
    "Oct 2006 - Feb 2008",
    "Junior Applications Developer",
    "<p>Design, Development, Testing and Documentation of the Synapse internal business" +
      "software.</p>" +
      "<p>3rd Level Support</p>" +
      "<p>Technologies Used: SAS, Java, JSP, JEE, Spring, Struts, Web Services, XFire.</p>",
    2
  );
  const civica: Job = new Job(
    "Civica",
    civicaImg,
    "Jan 2005 - Sep 2006",
    "Graduate Developer",
    "<p>Design, Development, Testing and Documentation of the Authority application." +
      "</p><p>3rd Level Support &amp; Maintenance duties." +
      "</p><p>Technologies Used: Java, JEE, Informix 4GL, Informix, Oracle, SQL Server, VBA, Crystal" +
      "Reports</p>",
    1
  );
  const university: Job = new Job(
    "University of Newcastle",
    uonImg,
    "2002 - 2004",
    "Computer Science",
    "<p>WAM (Weighted Average Mark) : 81.24</p>" +
      "<p><u>Awards:</u><ol><li>Object Technology Prize 2004</li><li>Nextgen.net prize " +
      "2003</li><li> Deans Merit List (2002-2004)</li><li>Deans Achievement Award 2002.</li></ol></p>",
    1
  );

  const [jobs] = React.useState<Job[]>([
    universal,
    workcover,
    macquarie,
    sas,
    civica,
    university
  ]);

  return (
    <>
      <section className="module module-gray" id="resume">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="m-title c-align">
                <h2>Resumé</h2>
                <h6>My education and experience</h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul className="timeline">
                <div className="timeline-top" />
                {jobs.map((job, i) => (
                  <React.Fragment key={i}>
                    <li>
                      <div className="timeline-badge" />
                      <div className="timeline-panel">
                        <div className="timeline-preview">
                          <img src={job.image} alt="" />
                        </div>
                        <div className="timeline-body">
                          <h5 className="timeline-title">{job.position}</h5>
                          <h6 className="timeline-description">
                            {job.company}| {job.period}
                          </h6>
                          <div
                            dangerouslySetInnerHTML={{
                              __html: job.description
                            }}
                          />
                        </div>
                      </div>
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { Resume };
