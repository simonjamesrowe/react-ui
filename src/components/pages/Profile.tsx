import React from "react";
import simon from "../../assets/images/simon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Skill {
  constructor(
    public title: string,
    public rating: number,
    public skills: Skill[] = []
  ) {}

  public getProgressColor(): string {
    if (this.rating > 90) {
      return "success";
    } else if (this.rating > 85) {
      return "info";
    } else {
      return "warning";
    }
  }
}

const Profile = () => {
  const [skills, setSkills] = React.useState([
    new Skill("Java", 92, [
      new Skill("1.4", 8),
      new Skill("5", 8),
      new Skill("6", 8),
      new Skill("7", 9.5),
      new Skill("8", 9)
    ]),
    new Skill("Spring", 95, [
      new Skill("Boot", 9.5),
      new Skill("Cloud", 8),
      new Skill("Data", 9.5),
      new Skill("Security", 9),
      new Skill("Session", 8),
      new Skill("Hateos", 8),
      new Skill("Web", 9)
    ]),
    new Skill("Search/NoSql", 84, [
      new Skill("ElasticSearch", 8),
      new Skill("Solr", 9),
      new Skill("MongoDB", 8),
      new Skill("DynamoDB", 8.5)
    ]),
    new Skill("AWS", 89, [
      new Skill("ECS", 9.5),
      new Skill("Fargate", 9),
      new Skill("CloudFormation", 9.5),
      new Skill("S3", 9.5),
      new Skill("SQS", 9),
      new Skill("ELB", 8.5),
      new Skill("CloudWatch", 8),
      new Skill("AutoScaling", 7.5),
      new Skill("Route53", 7),
      new Skill("IAM", 8),
      new Skill("Lambda", 8.5),
      new Skill("RDS", 8),
      new Skill("ElasticCache", 7)
    ]),
    new Skill("CI/CD", 93, [
      new Skill("Maven", 10),
      new Skill("Ant", 7),
      new Skill("Jenkins", 8),
      new Skill("Docker", 8),
      new Skill("Git", 7.5),
      new Skill("SVN", 8)
    ]),
    new Skill("RDBMS", 87, [
      new Skill("MySQL", 8.5),
      new Skill("Postgres", 7.5),
      new Skill("SQL Server", 8),
      new Skill("Oracle", 7),
      new Skill("Informix", 7),
      new Skill("DB2", 7.5)
    ]),
    new Skill("TDD", 93, [
      new Skill("Cucumber", 9),
      new Skill("Selenium", 8),
      new Skill("DBUnit", 9),
      new Skill("Mockito", 9.5),
      new Skill("EasyMock", 9),
      new Skill("Spring Rest Docs", 8)
    ]),
    new Skill("UI", 80, [
      new Skill("Angular JS", 7.5),
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
                Agile Software Engineer – Utilising Java, Spring, Angular &amp;
                AWS to architect and deliver enterprise software solutions{" "}
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <p>
                <img src={simon} alt="" />
              </p>
            </div>
            <div className="col-md-4">
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
                many industries from investment banking to media, across
                multiple countries. My mantra stays the same – keep it simple!
                Nobody benefits from complicated out of hours releases of
                monoliths, inherent with risks.
              </p>
              <p>
                This is where my skill and passion for Java, Spring, Docker,
                Cucumber, Git and AWS becomes one of my greatest assets. Whether
                it be cultivating new development comprising of CI pipelines
                with zero outage cloud deployments, to architecture of scalable
                serverless applications at AWS, I have a proven track record of
                delivering business value whilst mitigating risk.
              </p>
            </div>
            <div className="profile-widget">
              <h5>Social Profiles</h5>
              <ul className="widget-social">
                <li>
                  <a target="_blank" href="">
                    <FontAwesomeIcon className="fa-lg" icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/simon-rowe-2a94ab1/"
                  >
                    <FontAwesomeIcon className="fa-lg" icon={faLinkedin} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Profile };
