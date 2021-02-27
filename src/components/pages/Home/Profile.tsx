import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

import {CmsImage} from "../../common/CmsImage";
import ReactMarkdown from "react-markdown";
import {IProfile} from "../../../model/Profile";
import {getMediaIcon, ISocialMedia} from "../../../model/SocialMedia";
import {properties} from "../../../services/Environment";


interface IProfileProperties {
    profile: IProfile;
    socialMedias: ISocialMedia[];
}

const Profile = ({profile, socialMedias}: IProfileProperties) => {
    const [contactDetailsDisplayed, setContactDetailsDisplayed] = React.useState<boolean>(false)

    const toggleContactDetailsDisplayed = () => {setContactDetailsDisplayed(!contactDetailsDisplayed);}

    return (
        <>
            <div className="port_about_setions prt_toppadder80 page_scroll" data-scroll="0"
                 id="about_sec">
                <div className="selfintro_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-12 col-md-12">
                                <div className={"about_leftsection " + (contactDetailsDisplayed ? "open_details" : "")}>
                                    <div className="img_warapper">
                                        <CmsImage src={profile.profileImage} type={"small"} />
                                        <div className="icon" title="more information click + icon">
                                            <div className="iconbox" onClick={toggleContactDetailsDisplayed}>
                                                {!contactDetailsDisplayed && (<FontAwesomeIcon size="lg" icon={faPlus} />)}
                                                {contactDetailsDisplayed && (<FontAwesomeIcon size="lg" icon={faMinus} />)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="left_deatils">
                                        <div className="personal_details">
                                            <h1 className="ps_name">{profile.name}</h1>
                                            <p className="ps_designation">{profile.title}</p>
                                            <ul className="info-list">

                                                <li><span className="title">E-mail</span><span className="value"><a
                                                    href={`mailto:${profile.primaryEmail}`}>{profile.primaryEmail}</a></span></li>
                                                <li><span className="title">Residence</span><span
                                                    className="value">{profile.location}</span></li>
                                                <li><span className="title">Phone</span><span className="value">{profile.phoneNumber}</span>
                                                </li>
                                            </ul>

                                            <ul className="social-links">
                                                {socialMedias.map(socialMedia =>
                                                    <li><a className="tip social-button" href={socialMedia.link}>
                                                        <FontAwesomeIcon icon={getMediaIcon(socialMedia.type)!!} /></a></li>
                                                )}

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-12 col-md-12">
                                <div className="right_section">
                                    <div className="port_heading_wrapper">
                                        <div className="port_sub_heading_wrapper">
                                            <h2 className="port_sub_heading">About Me </h2>
                                        </div>
                                    </div>
                                    <h2 className="about_tophead tour-about">{profile.headline}</h2>
                                    <ReactMarkdown source={profile.description} />

                                    <div className="anout_section_btn">
                                        <a href={properties.apiUrl + "/resume"} className="portfolio_btn btn_yellow">
                                            <span className="first_text">Download CV</span>
                                            <span className="second_text">Download</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export {Profile};
