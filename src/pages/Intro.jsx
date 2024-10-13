import '../styles/Intro.css'
import mock1 from '../assets/mock1.png'

function Intro() {
    return (
        <main className='Intro'>
            <section className='description'>
                <h2>
                    Become more social,
                    <br />
                    <span style={{color: 'var(--light-text-color)'}}> one day at a time.</span>
                </h2>
                <h3>
                    Personalized daily challenges to help you grow socially, <i>wherever</i> you’re starting from.
                </h3>
                <button style={{marginTop: 'var(--medium-gap)'}}>
                    Join the waitlist
                </button>
            </section>
            <img className='dailyImage' src={mock1} alt="App Preview 1" />
        </main>
    );
}

export default Intro;