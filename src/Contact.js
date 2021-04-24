import React from 'react'
//import Form from 'react-bootstrap/Form';
import './Contact.css'
import './App.css'

function Contact() {
  
    return (    
        <>
            <div className='contact'>
                <div className='contact-wrap'>

                    <h2>Contact</h2>

                    <div className='form-wrap'>
                    <form action="POST" data-netlify="true">
                   
                        <label>
                            Name:
                            <input type="text" required="true" name="name" id="name"></input>
                            </label>
                        <label>
                            Phone Number:
                            <input type="tel" id="phone" name="phone"></input>
                        </label>                        
                        <label>
                            Email:
                            <input type="email" required="true" name="email" id="email"></input>
                        </label>
                        <label>
                            <h5>Message:</h5>
                            <input type="text" required="true" name="message" id="message"></input>
                        </label>
                            <div className='recaptcha'>
                                <div data-netlify-recaptcha="true"></div>
                            </div>
                        <label>
                            <input type="submit" value='submit'></input>
                        </label>
                        </form>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Contact;