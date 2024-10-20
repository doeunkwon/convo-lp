import '../styles/Intro.css'
import introImage from '../assets/intro-image.png'
function Intro({ scrollToWaitlist }) {
    return (
        <main className='Intro'>
            <section className='intro-header'>
                <section className='intro-description'>
                    <h2>
                        Become more social,
                        <br />
                        <span style={{color: 'var(--light-text-color)'}}> one day at a time.</span>
                    </h2>
                    <h3>
                        Personalized daily challenges to help you grow socially, <i>wherever</i> you’re starting from.
                    </h3>
                    <button onClick={scrollToWaitlist}>Join the waitlist</button>
                </section>
                <img className='intro-image' src={introImage} alt="App Preview 1" />
            </section>
        </main>
    );
}

export default Intro;