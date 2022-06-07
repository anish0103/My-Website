import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

import './contactpage.css';
import GitHub from '../images/github.png'
import Instagram from '../images/instagram.png'
import LinkedIn from '../images/linkedin.png'

const ContactPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const namevalid = "^[a-zA-Z.,?\\s]*$";
    const emailvalid = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

    const [Name, SetName] = useState('');
    const [PhoneNo, SetPhoneNo] = useState('');
    const [Email, SetEmail] = useState('');
    const [Enquiry, SetEnquiry] = useState('');

    const Postinformation = async () => {
        const data = { ClientName: Name, ClientPhoneNo: PhoneNo, ClientEmail: Email, ClientEnquiry: Enquiry }
        // console.log(data)
        SetName('')
        SetPhoneNo('')
        SetEmail('')
        SetEnquiry('')
        toast.success("Your Inquiry Is Reached To Me, I Will Contact You Soon!!");
        const response = await fetch('https://anishpatel-portfolio-backend.herokuapp.com/api/', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if (response.ok) {
            SetName('')
            SetPhoneNo('')
            SetEmail('')
            SetEnquiry('')
        }
    }

    const submithandler = (e) => {
        e.preventDefault();
        if (!Name.match(namevalid) || PhoneNo.length > 10 || PhoneNo.length < 10 || !Email.match(emailvalid) || !Enquiry.match(namevalid) || Enquiry.length === 0) {
            toast.error("Please Enter All Your Details Properly!");
            return
        }
        Postinformation();
    }

    const Namehandler = (e) => {
        SetName(e.target.value)
    }
    const Phonehandler = (e) => {
        SetPhoneNo(e.target.value)
    }
    const Emailhandler = (e) => {
        SetEmail(e.target.value)
    }
    const Enquiryhandler = (e) => {
        SetEnquiry(e.target.value)
    }

    return (
        <>
            <div className="sliderpage"></div>
            <div className="contactpage-maincontainer">
                <ToastContainer toastStyle={{ backgroundColor: "#252525", fontSize: "14px", lineHeight: "20px" }} />
                <div className="titlecontainer">
                    <h1>GET IN <span className="orangecolor">TOUCH</span></h1>
                    <span className="title-background">CONTACT</span>
                </div>
                <div className="contactpage-container">
                    <div className="contactpage-leftcontainer">
                        <h3>DON'T BE SHY !</h3>
                        <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        <div className="contact-details">
                            <div>
                                <DraftsRoundedIcon />
                            </div>
                            <div className="contact-subdetails">
                                <span>MAIL ME</span>
                                <a href="mailto:anishpatel1031@gmail.com" target='_blank' title='SEND A MAIL' className="simplefont">anishpatel1031@gmail.com</a>
                            </div>
                        </div>
                        <div className="contact-details">
                            <div>
                                <CallRoundedIcon />
                            </div>
                            <div className="contact-subdetails">
                                <span>CALL ME</span>
                                <a href="Tel: +917433027995" target='_blank' title='MAKE A CALL' className="simplefont">+91 7433027995</a>
                            </div>
                        </div>
                        <div className="contactpage-socialmedialink">
                            <div className="contactpage-link">
                                <a href="https://www.instagram.com/anishp1031/" target="_blank"><img src={Instagram} alt="Instagram" /></a>
                            </div>
                            <div className="contactpage-link">
                                <a href="https://github.com/anish0103" target="_blank"><img src={GitHub} alt="Instagram" /></a>
                            </div>
                            <div className="contactpage-link">
                                <a href="https://www.linkedin.com/in/anish-patel-4090081ab/" target="_blank"><img src={LinkedIn} alt="Instagram" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="contactpage-rightcontainer">
                        <div className="contactpage-formcontainer">
                            <input type="text" value={Name} onChange={Namehandler} placeholder="YOUR NAME" />
                            <input type="email" value={Email} onChange={Emailhandler} placeholder="YOUR EMAIL" />
                        </div>
                        <div className="contactpage-formcontainer">
                            <input type="number" value={PhoneNo} onChange={Phonehandler} placeholder="YOUR PHONE NUMBER" />
                        </div>
                        <div className="contactpage-formcontainer">
                            <textarea value={Enquiry} onChange={Enquiryhandler} placeholder="YOUR MESSAGE" />
                        </div>
                        <div className="homepage-buttoncontainer contactpage-button">
                            <Link onClick={submithandler}>SEND MESSAGE<div className="homepage-buttonarrow"><SendRoundedIcon /></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default ContactPage;
