/* eslint-disable react/prop-types */
import Form from "./Form"
import reactLogo from "./assets/react.png"

function Contact({ handleEmailClick, handleWhatsAppClick }) {
    return (
        <div id="contact" className="contact-area contact-page overflow-hidden default-padding">
            <div className="container">
                <div className="row">
                    <div className="col-tact-stye-one col-lg-5 pr-50 pr-md-15 pr-xs-15">
                        <div className="contact-style-one-info">
                            <div className="top-info">
                                <h2 className="gradient-text">{"Let's Talk"}</h2>
                                <div className="call">
                                    <img src={reactLogo} alt="React Logo" />
                                    <a className="phone-link" onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }}>+2348108301202</a>
                                </div>
                            </div>
                            <ul className="contact-address">
                                <li>
                                    <div className="info">
                                        <h4>Location</h4>
                                        <p>Lagos Nigeria</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="info">
                                        <h4>Official Email</h4>
                                        <a onClick={handleEmailClick} style={{ cursor: 'pointer' }}>adeleyealarape@gmail.com</a>
                                    </div>
                                </li>
                            </ul>
                            <p className="copyright">
                                &copy; 2023. All Rights Reserved
                            </p>
                        </div>
                    </div>
                    <div className="col-tact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15 mt-md-50 mt-xs-50">
                        <div className="contact-form-style-one">
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Contact