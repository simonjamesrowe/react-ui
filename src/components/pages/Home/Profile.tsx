import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";
import { Popover, OverlayTrigger, ProgressBar } from "react-bootstrap";
import { faHandPointRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { CmsImage } from "../../common/CmsImage";
import ReactMarkdown from "react-markdown";
import {IProfile} from "../../../model/Profile";
import {getVariant, ISkillGroup} from "../../../model/Skill";
import {getMediaIcon, ISocialMedia} from "../../../model/SocialMedia";


interface IProfileProperties {
  profile: IProfile;
  skillsGroups: ISkillGroup[];
  socialMedias: ISocialMedia[];
}

const Profile = ({ profile, skillsGroups, socialMedias }: IProfileProperties) => {

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
              <CmsImage src={profile.profileImage} />
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
              const popOver = (
                <Popover id={skill.name}>
                  <Popover.Content>
                    <div className="progressItem">
                      <ul>
                        {skill.skills.map((subskill, i) => (
                          <React.Fragment key={i}>
                            <li>
                              <span className="subskill-title">
                                {subskill.name}
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
                    {skill.name} &nbsp;
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
