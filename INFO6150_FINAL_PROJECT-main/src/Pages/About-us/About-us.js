//import React from 'react';
import './About-Us.css'



import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_chuzcc9",
        "template_ssnvqcu",
        form.current,
        "bKxw9ZS42LBIVYU1Q"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (

     <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8">
                        <h2>About Us</h2>
                        <p className="lead">Welcome to Travel Blog, your go-to source for unforgettable travel experiences. We're dedicated to providing you with the best travel stories, tips, and services, with a focus on quality, uniqueness, and customer satisfaction.</p>
                        <p>Founded in 2010, Travel Blog has come a long way from its beginnings. We now serve customers all over the world and are thrilled to be a part of the adventurous wing of the travel industry.</p>
                        <p>We hope you enjoy our blogs and services as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
                    </div>
                    <div className="col-lg-4">
                        <img
                            src="images/img_3.jpg"
                            className="img-fluid rounded-circle rounded-image"
                            alt="Team"
                        />
                    </div>
                </div>

                <hr className="my-4" />

                <h2 className="mb-4">Our Team</h2>
                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <img
                                src="images/person_1.jpg"
                                className="card-img-top rounded-circle rounded-image"
                                alt="Team Member 1"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">John Doe</h5>
                                <p className="card-text">Founder & CEO</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <img
                                src="images/person_2.jpg"
                                className="card-img-top rounded-circle rounded-image"
                                alt="Team Member 2"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Jane Smith</h5>
                                <p className="card-text">Head of Operations</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                            <img
                                src="images/person_3.jpg"
                                className="card-img-top rounded-circle rounded-image"
                                alt="Team Member 3"
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">Robert Johnson</h5>
                                <p className="card-text">Lead Travel Blogger</p>
                            </div>
                        </div>
                    </div>
                </div>


    


                 <hr className="my-4" />

                 <h2 className="mb-4">Contact Us</h2>
       
<StyledContactForm>
                    <div class="con-form">

                    <form ref={form} onSubmit={sendEmail}>
        <div>
        <label>Your Name</label>
        <input type="text" name="user_name" />
        </div>
       
        <div  className="mb-3"> 
        <label>Your Email</label>
        <input type="email" name="user_email" />
        </div>
        
        <div  className="mb-3">
        <label>Message</label>
        <textarea name="message" />
        </div>
       
       
        <input type="submit" value="Send" />
      </form>
                    </div>

    
    </StyledContactForm>

            </div>
           


   
     <footer className="bg-dark text-light text-center py-3 mt-5">
                <div className="container">&copy; 2023 Travel Blog. All rights reserved.</div>
            </footer>
     </>
  );
};

//export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;

export default Contact;
