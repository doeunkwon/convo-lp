import '../styles/Waitlist.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons'; // Importing from the regular set
import TextField from '../components/TextField';

function Waitlist() {
    return (
        <main className='Waitlist'>
            <section className='waitlistContent'>
                <section className='waitlistHeader'>
                    <h1>
                        Together, let’s get people chatting again.
                    </h1>
                    <h3 style={{marginBottom: '30px'}}>
                        Join the waitlist and help bring meaningful
                        <br />
                        conversations back into daily life.
                    </h3>
                </section>
                <TextField
                    icon={<FontAwesomeIcon icon={faUser} />}
                    placeholder='Name'
                />
                <TextField
                    icon={<FontAwesomeIcon icon={faEnvelope} />}
                    placeholder='Email'
                />
                <button style={{marginTop: '60px'}}>
                    Let's do it
                </button>
            </section>
        </main>
    );
}

export default Waitlist;