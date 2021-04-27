import React from 'react';
//import Form from 'react-bootstrap/Form';
import './Contact.css';
import './App.css';
import {Button} from 'reactstrap';

function Contact() {
  
    return (    
        <>
            <div id="contact" className='contact'>
                <div className='contact-wrap'>

                    <h2 className="title"><a href id='contact' >Contact</a></h2>

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
                        <br/>
                            <Button class="button" color='dark' type='submit' size='lrg'>SUBMIT</Button>
                        
                        </form>

                        <div className="info">
                            <h4>Phone: 617-947-8614</h4>
                            <h4>Email: xjmackey@gmail.com</h4>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Contact;