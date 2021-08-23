import { React, useEffect, useState } from "react";
import AOS from 'aos';

import './CSS/contactpage.css';
import GitHub from './images/github.png'
import Instagram from './images/instagram.png'
import LinkedIn from './images/linkedin.png'
import "aos/dist/aos.css";

const ContactPage = () => {

    const namevalid = "^[a-zA-Z.,?\\s]*$";
    const emailvalid = "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";

    const [Name, SetName] = useState('');
    const [PhoneNo, SetPhoneNo] = useState('');
    const [Email, SetEmail] = useState('');
    const [Enquiry, SetEnquiry] = useState('');
    const [Valid, SetValid] = useState(true)

    const Postinformation = async () => {
        const data = { ClientName: Name, ClientPhoneNo: PhoneNo, ClientEmail: Email, ClientEnquiry: Enquiry }
        // console.log(data)
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
            SetValid(true)
        }
    }

    const submithandler = (e) => {
        e.preventDefault();
        if (!Name.match(namevalid) || PhoneNo.length > 10 || PhoneNo.length < 10 || !Email.match(emailvalid) || !Enquiry.match(namevalid) || Enquiry.length === 0) {
            SetValid(false)
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

    useEffect(() => {
        AOS.init({
            offset: 210,
            delay: 300,
            duration: 1000,
        });
    }, []);

    return (
        <div className='contact-main-container'>
            <div className='contact-content' >
                <div data-aos={"fade-right"} className='content-class'>
                    <h1>GET IN TOUCH</h1>
                    <h2>_______________</h2>
                    <p>If you have a general enquiry. Use the contact form to message me. If you would like to discuss a particular project- i'd love to find out more.</p>
                    <h4>Phone No: <a>7433027995</a></h4>
                    <h4>Email Id: <a href="mailto:anishpatel1031@gmail.com" target='_blank' title='Send a Email'>anishpatel1031@gmail.com</a></h4>
                    <div className="contact-link-maincontainer">
                        <div className="contact-link">
                            <a href="https://www.instagram.com/anish_0103/" target="_blank"><img src={Instagram} alt="Instagram logo" /></a>
                        </div>
                        <div className="contact-link">
                            <a href="https://github.com/anish0103" target="_blank"><img src={GitHub} alt="Instagram logo" /></a>
                        </div>
                        <div className="contact-link">
                            <a href="https://www.linkedin.com/in/anish-patel-4090081ab/" target="_blank"><img src={LinkedIn} alt="Instagram logo" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact-formcontainer'>
                <div data-aos={"fade-down"} className='formcontainer'>
                    <div>
                        <form>
                            {!Valid && <p>Please Enter Valid Details!!!</p>}
                            <label>Name</label>
                            <input value={Name} onChange={Namehandler} ons type="text" placeholder='Enter Your Name'></input>
                            <label>Phone No.</label>
                            <input value={PhoneNo} onChange={Phonehandler} type="number" placeholder='Enter Your Number'></input>
                            <label>Email Id</label>
                            <input value={Email} onChange={Emailhandler} type="email" placeholder='Enter Your Email id'></input>
                            <label>Enquiry</label>
                            <textarea value={Enquiry} onChange={Enquiryhandler} type="text" className='textareafield' placeholder='Enter Your enquiry'></textarea>
                            <button onClick={submithandler} type='submit'>GET IN TOUCH</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;