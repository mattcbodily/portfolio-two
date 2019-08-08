import React, {useState} from 'react';
import './Contact.css';

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return(
        <div id='contact' className='contact-container'>
            <h1>Contact</h1>
            <h4>Have a question or want to work together?</h4>
            <form>
                <input 
                    value={name}
                    type='text'
                    placeholder='Name'
                    className='contact-input'
                    onChange={(e) => setName(e.target.value)}/>
                <input 
                    value={email}
                    type='email'
                    placeholder='Email'
                    className='contact-input'
                    onChange={(e) => setEmail(e.target.value)}/>
                <textarea 
                    value={message}
                    placeholder='Enter Message'
                    className='contact-textarea'
                    onChange={(e) => setMessage(e.target.value)}/>
                <button>Send</button>
            </form>
        </div>
    )
}

export default Contact;