import React, { useState } from 'react';
import '../styles/Waitlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import TextField from '../components/TextField';

const Waitlist = React.forwardRef((props, ref) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async () => {
        if (!name || !email) {
            alert('Please enter both name and email.');
            return;
        }
    
        setIsSubmitting(true);
        
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwJEOhFDOiqmVsWRnzMfPe4MOV86aEMGxZnrQ-jTFLETF2gf95gge4MyXC0OueBgzA/exec';
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        
        try {
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: formData,
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            console.log(result);
            if (result.result === 'success') {
                alert('Thanks for joining our waitlist!');
                setName('');
                setEmail('');
            } else {
                throw new Error(result.message || 'Unknown error occurred');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className='Waitlist' ref={ref}>
            <section className='waitlist-content'>
                <section className='waitlist-header'>
                    <h1>
                        Together, let's get people chatting again.
                    </h1>
                    <h3>
                        Join the waitlist to get early access and bring conversations back into daily life.
                    </h3>
                </section>
                <section className='waitlist-buttons'>
                    <TextField
                        icon={<FontAwesomeIcon icon={faUser} />}
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        icon={<FontAwesomeIcon icon={faEnvelope} />}
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </section>
                <button onClick={handleSubmit} disabled={isSubmitting}>
                    {isSubmitting ? 'Joining...' : "Join the waitlist"}
                </button>
                <p>
                    @2024 Convo | All rights reserved
                </p>
            </section>
        </main>
    );
});

export default Waitlist;
