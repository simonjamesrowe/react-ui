import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {  ProgressBar } from "react-bootstrap";
import {  faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { CmsImage } from "../../common/CmsImage";
import ReactMarkdown from "react-markdown";
import {IProfile} from "../../../model/Profile";
import {getVariant, ISkillGroup} from "../../../model/Skill";
import {getMediaIcon, ISocialMedia} from "../../../model/SocialMedia";
import {CmsThumbnail} from "../../common/CmsThumbnail";
import {SkillGroup} from "./SkillGroup";


interface IProfileProperties {
  profile: IProfile;
  skillsGroups: ISkillGroup[];
  socialMedias: ISocialMedia[];
}

const Profile = ({ profile, skillsGroups, socialMedias }: IProfileProperties) => {
  const [skillsDraw, setSkillsDraw] = React.useState({});

  React.useEffect(() => {
    skillsGroups.forEach(sk => setSkillsDraw({...skillsDraw, [sk.name] : false}));
  }, [skillsGroups]);

  const expandSkillGroup = (name: string) => {
    setSkillsDraw({...skillsDraw, [name] : true});
  };

  const collapseSkillGroup = (name: string) => {
    setSkillsDraw({...skillsDraw, [name] : false});
  }

  return (
    <section className="module" id="profile">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="m-title c-align">
              <h2>{profile.name}</h2>
              <h6>{profile.headline}</h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <p>
              <CmsImage src={profile.profileImage} type={"small"}/>
            </p>
          </div>
          <div className="col-sm-12 col-md-4 ">
            <h5>Professional Profile</h5>
            <ReactMarkdown source={profile.description} />
            <div className="profile-widget">
              <h5>Social Profiles</h5>
              <ul className="widget-social">
                {socialMedias.map((socialMedia, count) =>
                  <>
                    <li key={count}>
                      <a
                          target="_blank"
                          title={socialMedia.name}
                          href={socialMedia.link}
                          rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon size="lg" icon={getMediaIcon(socialMedia.type)!!} />
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <h5>My Skills</h5>
            {skillsGroups.map((skill, j) => {
              return (
                <React.Fragment key={j}>
                  <div className="progress-title" key={j}>
                    {skill.image && <CmsThumbnail  src={skill.image}/>} {skill.name} &nbsp;
                    {/* tslint:disable-next-line:jsx-no-lambda */}
                      <SkillGroup open={skillsDraw[skill.name]} skillGroup={skill} close={() => {collapseSkillGroup(skill.name)}} />
                      {/* tslint:disable-next-line:jsx-no-lambda */}
                      <FontAwesomeIcon
                        className="pointer"
                        size="lg"
                        icon={faChevronDown}
                        onClick={() => expandSkillGroup(skill.name)}
                        style={{float : "right"}}
                      />

                  </div>
                  <ProgressBar now={skill.rating * 10} variant={getVariant(skill.rating)} />
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
