import React, {useState} from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        if(!name){
            alert('Please enter your name')
        } else if(!email){
            alert('Please enter your email')
        } else if(!message){
            alert('Please enter your message')
        } else {
            const newMessage = {
                name,
                email,
                message
            }

            axios.post('/api/message', newMessage)
            .then(res => alert('Message Sent!'))
            .catch(err => console.log(err))

            setName('')
            setEmail('')
            setMessage('')
        }
    }

    return(
        <div id='contact' className='contact-container'>
            <h1>Contact</h1>
            <h4>Have a question or want to work together?</h4>
                <input 
                    value={name}
                    type='text'
                    maxLength='50'
                    placeholder='Name'
                    className='contact-input'
                    onChange={(e) => setName(e.target.value)}/>
                <input 
                    value={email}
                    type='email'
                    maxLength='100'
                    placeholder='Email'
                    className='contact-input'
                    onChange={(e) => setEmail(e.target.value)}/>
                <textarea 
                    value={message}
                    maxLength='1000'
                    placeholder='Enter Message'
                    className='contact-textarea'
                    onChange={(e) => setMessage(e.target.value)}/>
                <div>
                    <button onClick={sendMessage}>Send</button>
                </div>
        </div>
    )
}

export default Contact;