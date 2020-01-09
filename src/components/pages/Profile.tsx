import React from "react";
import simon from "../../assets/images/simon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Rating from "react-rating";
import { Popover, OverlayTrigger, ProgressBar } from "react-bootstrap";
import { faHandPointRight, faStar } from "@fortawesome/free-solid-svg-icons";

class Skill {
  public variant: "success" | "danger" | "warning" | "info" = "info";
  constructor(
    public title: string,
    public rating: number,
    public skills: Skill[] = []
  ) {
    if (this.rating > 90) {
      this.variant = "success";
    } else if (this.rating > 85) {
      this.variant = "info";
    } else {
      this.variant = "warning";
    }
  }
}

const Profile = () => {
  const [skills] = React.useState([
    new Skill("Java/Kotlin", 92, [
      new Skill("Java 8", 9),
      new Skill("Java 11", 9),
      new Skill("Kotlin", 7)
    ]),
    new Skill("Spring", 95, [
      new Skill("Spring Boot", 9.5),
      new Skill("Spring Cloud Stream", 9),
      new Skill("Spring Data Data", 9.5),
      new Skill("Spring Security", 9),
      new Skill("Spring Cloud Netflix", 9),
      new Skill("Spring Cloud Kubernetes", 9)
    ]),
    new Skill("Cloud", 89, [
      new Skill("Kubernetes", 8.5),
      new Skill("AWS - ECS", 9.5),
      new Skill("AWS - Fargate", 9),
      new Skill("AWS - CloudFormation", 9.5),
      new Skill("AWS - S3", 9.5),
      new Skill("AWS - EKS", 9.5),
      new Skill("AWS - Route53", 7),
      new Skill("AWS - IAM", 8),
      new Skill("AWS - Lambda", 8.5),
      new Skill("AWS - RDS", 8),
      new Skill("AWS - ElasticCache", 7),
      new Skill("Cloud Foundry", 7)
    ]),
    new Skill("CI/CD", 93, [
      new Skill("Maven", 10),
      new Skill("Gradle", 8),
      new Skill("Jenkins", 8),
      new Skill("Concourse", 8),
      new Skill("Nexus", 8),
      new Skill("Docker", 8),
      new Skill("Git", 7.5),
      new Skill("Git Ops", 7.5)
    ]),
    new Skill("Data/Search", 87, [
      new Skill("ElasticSearch", 8),
      new Skill("Solr", 9),
      new Skill("MongoDB", 8),
      new Skill("DynamoDB", 8.5),
      new Skill("MySQL", 8.5),
      new Skill("Postgres", 7.5),
      new Skill("SQL Server", 8),
      new Skill("Oracle", 7),
      new Skill("Informix", 7),
      new Skill("DB2", 7.5)
    ]),
    new Skill("TDD", 93, [
      new Skill("Test Containers", 8),
      new Skill("Cucumber", 9),
      new Skill("Selenium", 8),
      new Skill("DBUnit", 9),
      new Skill("Mockito", 9.5),
      new Skill("EasyMock", 9),
      new Skill("Spring Rest Docs", 8)
    ]),
    new Skill("UI", 80, [
      new Skill("Angular JS", 7.5),
      new Skill("React", 8.5),
      new Skill("Angular", 8.5),
      new Skill("HTML5", 7.5),
      new Skill("CSS3", 7.5),
      new Skill("JQuery", 8.5),
      new Skill("Javascript", 8),
      new Skill("TypeScript", 8),
      new Skill("JSTL", 9.5)
    ])
  ]);
  return (
    <section className="module" id="profile">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="m-title c-align">
              <h2>Simon Rowe</h2>
              <h6>
              Passionate about building cloud native apps utilizing Spring, Kafka and Kubernetes. 
              </h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <p>
              <img src={simon} alt="" />
            </p>
          </div>
          <div className="col-sm-12 col-md-4 ">
            <h5>Profesional Profile</h5>
            <p>
              I am driven to achieve real business value in the shortest time
              possible through the power of scalable software, utilizing open
              source technologies, mainly surrounding java and the spring
              framework.
            </p>
            <p>
              With over 13 years of developing, architecting and running java
              based web applications, my professional experience has spanned
              many industries from investment banking to media, across multiple
              countries. My mantra stays the same – keep it simple! Nobody
              benefits from complicated out of hours releases of monoliths,
              inherent with risks.
            </p>
            <p>
              This is where my skill and passion for Java, Spring, Docker,
              Cucumber, Git and AWS becomes one of my greatest assets. Whether
              it be cultivating new development comprising of CI pipelines with
              zero outage cloud deployments, to architecture of scalable
              serverless applications at AWS, I have a proven track record of
              delivering business value whilst mitigating risk.
            </p>
            <div className="profile-widget">
              <h5>Social Profiles</h5>
              <ul className="widget-social">
                <li key="github">
                  <a
                    target="_blank"
                    href="https://github.com/simonrowe"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon size="lg" icon={faGithub} />
                  </a>
                </li>
                <li key="linkedin">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/simon-rowe-2a94ab1/"
                  >
                    <FontAwesomeIcon size="lg" icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <h5>My Skills</h5>
            {skills.map((skill, j) => {
              const popOver = (
                <Popover id={skill.title}>
                  <Popover.Content>
                    <div className="progressItem">
                      <ul>
                        {skill.skills.map((subskill, i) => (
                          <React.Fragment key={i}>
                            <li>
                              <span className="subskill-title">
                                {subskill.title}
                              </span>
                              <span className="subskill-rating">
                                <Rating
                                  initialRating={subskill.rating}
                                  stop={10}
                                  step={2}
                                  fullSymbol={<FontAwesomeIcon icon={faStar} />}
                                  emptySymbol={
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                  }
                                />
                              </span>
                            </li>
                          </React.Fragment>
                        ))}
                      </ul>
                    </div>
                  </Popover.Content>
                </Popover>
              );
              return (
                <React.Fragment key={j}>
                  <div className="progress-title" key={j}>
                    {skill.title} &nbsp;
                    <OverlayTrigger
                      overlay={popOver}
                      trigger="hover"
                      placement="right"
                    >
                      <FontAwesomeIcon
                        className="pointer"
                        size="lg"
                        icon={faHandPointRight}
                      />
                    </OverlayTrigger>
                  </div>
                  <ProgressBar now={skill.rating} variant={skill.variant} />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Profile };
