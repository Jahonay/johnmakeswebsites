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
                    <form name="contact" method="POST" data-netlify="true">
                    
                        <label>
                            Name:
                            <input type="text" required="true" name="name" id="name"></input>
                            </label>
                                   
                        <label>
                            Email:
                            <input type="email" required="true" name="email" id="email"></input>
                        </label>
                        <label>
                            Message:
                            <input type="text" required="true" name="message" id="message"></input>
                        </label>
                            <input type="submit" value='Send Message' class="button"></input>
                        
                        </form>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Contact;