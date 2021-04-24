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
                    <form id='contact' name="contact" method="POST" data-netlify="true">
                   
                        <label>
                            Name:
                            <input type="text" required="true" id="name"></input>
                            </label>
                        <label>
                            Phone Number:
                            <input type="tel" id="phone"></input>
                        </label>                        
                        <label>
                            Email:
                            <input type="email" required="true" id="email"></input>
                        </label>
                        <label>
                            <h5>Message:</h5>
                            <input type="text" required="true" id="message"></input>
                        </label>
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