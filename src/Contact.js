import React from 'react'
//import Form from 'react-bootstrap/Form';
import './Contact.css'
import './App.css'

function Contact() {

const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('pizzaOrder');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}


document.querySelector("form").addEventListener("submit", handleSubmit);

    return (    
        <>
            <div className='contact'>
                <div className='contact-wrap'>

                    <h2>Contact</h2>

                    <div className='form-wrap'>
                    <form name="contact" method="POST" data-netlify="true">
                        <div className='name'>
                            <h5>Name:</h5>
                            <input type="text" required="true" id="name"></input>
                        </div>
                        <div className='phone'>
                            <h5>Phone Number:</h5>
                            <input type="tel" id="phone"></input>
                        </div>
                        <div className='email'>
                            <h5>Email:</h5>
                            <input type="email" required="true" id="email"></input>
                        </div>
                        <div className='message'>
                            <h5>Message:</h5>
                            <input type="text" required="true" id="message"></input>
                        </div>
                        <div className='submit'>
                            <input type="submit" value='submit' id="submit"></input>
                        </div>
                        </form>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Contact;