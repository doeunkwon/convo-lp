import React from 'react';
import '../styles/Waitlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import TextField from '../components/TextField';

const Waitlist = React.forwardRef((props, ref) => {
    return (
        <main className='Waitlist' ref={ref}>
            <section className='waitlist-content'>
                <section className='waitlist-header'>
                    <h1>
                        Together, let’s get people chatting again.
                    </h1>
                    <h3>
                        Join the waitlist and help bring meaningful
                        <br />
                        conversations back into daily life.
                    </h3>
                </section>
                <section className='waitlist-buttons'>
                    <TextField
                        icon={<FontAwesomeIcon icon={faUser} />}
                        placeholder='Name'
                    />
                    <TextField
                        icon={<FontAwesomeIcon icon={faEnvelope} />}
                        placeholder='Email'
                    />
                </section>
                <button>
                    Let's do it
                </button>
            </section>
        </main>
    );
});

export default Waitlist;