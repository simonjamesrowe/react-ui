import React from "react";
import {faMapPin,faPhone,faMailBulk} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IProfile} from "../../../model/Profile";

interface IProps {
    profile: IProfile
}
const Contact = ({profile} : IProps) => {
    return (
        <>
            <div className="port_contact_wrapper prt_toppadder80 page_scroll" data-scroll="3" id="contact_sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="port_heading_wrapper text-center prt_bottompadder40">
                                <div className="port_sub_heading_wrapper">
                                    <h2 className="port_sub_heading">Contact Me</h2>
                                </div>
                                <h1 className="port_heading">Get In Touch</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="port_contact_setions" id="scroll_contact">
                    <div className="contact_section">
                        <div className="container">
                            <div className="port_contact_mainbox">
                                <div className="row">
                                    <div className="col-md-12 text-center prt_bottompadder40 ">
                                        <div className="port_hadding_style_sec ">
                                            <h2 className="port_head_wrapper">My Contact</h2>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="port_contact_form">
                                            <form>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input type="text" name="first_name"
                                                                   className="form-control require" id="name"
                                                                   placeholder="First name"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input type="text" name="last_name"
                                                                   className="form-control require" id="last-name"
                                                                   placeholder="Last name"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input type="email" name="email"
                                                                   className="form-control require" id="email"
                                                                   placeholder="Email Address" data-valid="email"
                                                                   data-error="Email should be valid."/>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input type="text" name="subject"
                                                                   className="form-control require" id="subject"
                                                                   placeholder="Subject"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <textarea name="message" className="form-control require"
                                                                      rows={3} id="comment"
                                                                      placeholder="Message"></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="banner_btn">
                                                            <button type="button" data-type="contact"
                                                                    className="portfolio_btn btn_red submitForm">
                                                                <span className="first_text">Submit</span>
                                                                <span className="second_text">Send</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="response"></div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="port_footer_setions prt_toppadder80">
                    <div className="footer_section">
                        <div className="container">
                            <div className="footer_contact_info">
                                <div className="row">
                                    <div className="col-sm-4 text-center">
                                        <div className="contact_info">
                                            <div className="info_img">
                                                <FontAwesomeIcon icon={faMapPin} size={"3x"} />
                                            </div>
                                            <h2 className="footer_heading">Location</h2>
                                            <p>{profile.location}</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 text-center">
                                        <div className="contact_info">
                                            <div className="info_img">
                                                <FontAwesomeIcon icon={faPhone} size={"3x"} />
                                            </div>
                                            <h2 className="footer_heading">Phone</h2>
                                            <p><a href="javascript:;">{profile.phoneNumber}</a></p>

                                        </div>
                                    </div>
                                    <div className="col-sm-4 text-center">
                                        <div className="contact_info">
                                            <div className="info_img">
                                                <FontAwesomeIcon icon={faMailBulk} size={"3x"} />
                                            </div>
                                            <h2 className="footer_heading">Email</h2>
                                            <p><a href="javascript:;">{profile.primaryEmail}</a></p>
                                            <p><a href="javascript:;">{profile.secondaryEmail}</a></p>
                                        </div>
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

export {Contact};
