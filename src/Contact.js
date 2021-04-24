import React from 'react';
//import Form from 'react-bootstrap/Form';
import './Contact.css';
import './App.css';

function Contact() {
  
    return (    
        <>
            <div className='contact'>
                <div className='contact-wrap'>

                    <h2 className="title">Contact</h2>

                    <div className='form-wrap'>
                    <form name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact" />
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
                            <textarea required="true" name="message" id="message" rows='10' />
                        </label>
                            <input type="submit" class="button"></input>
                        
                        </form>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Contact;