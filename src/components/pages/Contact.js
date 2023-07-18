import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";


function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  
        return(
            <div className="contact-container shadow ">
            <div className="row ">
                <div className="col-md-4 bg-left p-5 text-white order-sm-first order-last">
                    <h2>Let's get in touch</h2>
                    <p>Feel free to reach out to us for any inquiries or questions. Our team is here to assist you!</p>
                    <div className="d-flex mt-2">
                        <i className="bi bi-geo-alt"></i>
                        <p className="mt-3 ms-3">Address : Ahemdabad</p>
                    </div>
                    <div className="d-flex mt-2">
                        <i className="bi bi-telephone-forward"></i>
                        <p className="mt-4 ms-3">Phone : 8888888888</p>
                    </div>
                    <div className="d-flex mt-2">
                        <i className="bi bi-envelope"></i>
                        <p className="mt-4 ms-3">MedcubePharmaceuticals@gmail.com</p>
                    </div>
                    <div className="d-flex mt-2">
                        <i className="bi bi-youtube"></i>
                        <p className="mt-4 ms-3">Website : www.website.com/</p>
                    </div>
                </div>
                <div className="col-md-8 p-5 ">
                    <h2>Get in touch</h2>
                    <form className="row g-3 contactForm mt-4" ref={form} onSubmit={sendEmail}>
                        <div className="col-12">
                          <label htmlFor="inputname" className="form-label">Name</label>
                          <input type="text" className="form-control" id="inputname" required name="user_name" />
                        </div>
   
                        <div className="col-12">
                          <label htmlFor="inputemail" className="form-label">Email Id</label>
                          <input type="email" className="form-control" id="inputemail" required name="user_email" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputcontact" className="form-label">Contact Number</label>
                            <input type="tel" className="form-control" id="inputcontact" placeholder="optional" name="user_contact" />
                          </div>
                        <div className="col-12">
                            <label htmlFor="inputmessage" className="form-label">Message</label>
                            <textarea type="text" className="form-control" id="inputmessage" required name="user_message" /> 
                          </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary mt-3">Send</button>
                        </div>
                      </form>
                    
                </div>
            </div>
        </div>
        )
    

}
export default Contact;