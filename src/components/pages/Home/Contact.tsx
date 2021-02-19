import React from "react";
import {faMapPin, faPhone, faMailBulk} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IProfile} from "../../../model/Profile";
import {useFormik} from 'formik';
import {Alert, Toast} from "react-bootstrap";
import Axios from "axios";
import {properties} from "../../../services/Environment";

interface IProps {
    profile: IProfile
}

const validate = values => {
    const errors: { [key: string]: any } = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    }

    if (!values.emailAddress) {
        errors.emailAddress = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)) {
        errors.emailAddress = 'Invalid email address';
    }

    if (!values.subject) {
        errors.subject = 'Required';
    }

    if (!values.content) {
        errors.content = 'Required';
    }

    return errors;
};

const Contact = ({profile}: IProps) => {
    const [showAlert, setShowAlert] = React.useState<boolean>(false);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [success, setSuccess] = React.useState<boolean>(false);
    const formik = useFormik({
        initialValues: {
            "firstName": "",
            "lastName": "",
            "emailAddress": "",
            "subject": "",
            "content": ""
        },
        validate,
        onSubmit: (values) => {
            setLoading(true);
            Axios.post(`${properties.apiUrl}/contact-us`, values).then(
                result => {
                    if (result.status == 200) {
                        setSuccess(true);
                        formik.resetForm();
                    } else {
                        setSuccess(false);
                    }
                    setShowAlert(true);
                    setTimeout(() => {setShowAlert(false)}, 3000);
                    setLoading(false);
                }
            )
        }
    });
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
                                            <h2 className="port_head_wrapper">Send a message</h2>
                                        </div>
                                        <Alert variant={success ? "success" : "danger"} onClose={() => setShowAlert(false)} show={showAlert} dismissible>
                                            <p>{success ? "Your message has been sent" : "An unexpected error has occured"}</p>
                                        </Alert>
                                    </div>
                                    <div className="col-12">

                                        <div className="port_contact_form">
                                            <form onSubmit={formik.handleSubmit}>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <div className="form-group tour-contact">
                                                            <input type="text" name="firstName"
                                                                   className="form-control require" id="firstName"
                                                                   value={formik.values.firstName}
                                                                   onChange={formik.handleChange}
                                                                   placeholder="First name"/>
                                                            {formik.touched.firstName && formik.errors.firstName ? <div
                                                                className="error">{formik.errors.firstName}</div> : null}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input type="text" name="lastName"
                                                                   value={formik.values.lastName}
                                                                   onChange={formik.handleChange}
                                                                   className="form-control require" id="last-name"
                                                                   placeholder="Last name"/>
                                                            {formik.touched.lastName && formik.errors.lastName ? <div
                                                                className="error">{formik.errors.lastName}</div> : null}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input type="email" name="emailAddress"
                                                                   value={formik.values.emailAddress}
                                                                   onChange={formik.handleChange}
                                                                   className="form-control require" id="email"
                                                                   placeholder="Email Address" data-valid="email"
                                                                   data-error="Email should be valid."/>
                                                            {formik.touched.emailAddress && formik.errors.emailAddress ? <div
                                                                className="error">{formik.errors.emailAddress}</div> : null}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="form-group">
                                                            <input type="text" name="subject"
                                                                   value={formik.values.subject}
                                                                   onChange={formik.handleChange}
                                                                   className="form-control require" id="subject"
                                                                   placeholder="Subject"/>
                                                            {formik.touched.subject && formik.errors.subject ? <div
                                                                className="error">{formik.errors.subject}</div> : null}
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <textarea name="content" className="form-control require"
                                                                      value={formik.values.content}
                                                                      onChange={formik.handleChange}
                                                                      rows={3} id="content"
                                                                      placeholder="Message"></textarea>
                                                            {formik.touched.content && formik.errors.content ? <div
                                                                className="error">{formik.errors.content}</div> : null}
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="banner_btn">
                                                            <button disabled={loading} type="submit" data-type="contact"
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
                                                <FontAwesomeIcon icon={faMapPin} size={"3x"}/>
                                            </div>
                                            <h2 className="footer_heading">Location</h2>
                                            <p>{profile.location}</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 text-center">
                                        <div className="contact_info">
                                            <div className="info_img">
                                                <FontAwesomeIcon icon={faPhone} size={"3x"}/>
                                            </div>
                                            <h2 className="footer_heading">Phone</h2>
                                            <p><a href="javascript:;">{profile.phoneNumber}</a></p>

                                        </div>
                                    </div>
                                    <div className="col-sm-4 text-center">
                                        <div className="contact_info">
                                            <div className="info_img">
                                                <FontAwesomeIcon icon={faMailBulk} size={"3x"}/>
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
