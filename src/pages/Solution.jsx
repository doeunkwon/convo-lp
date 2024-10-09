import '../styles/Solution.css'
import mock2 from '../assets/mock2.png'
import StepsPanel from '../components/StepsPanel'

function Solution() {
    return (
        <main className='Solution'>
            <section className='content'>
            <h2>
                Introducing Convo,
                <br />
                <span style={{color:'var(--light-text-color)'}}>Your social sidekick.</span>
            </h2>
            <img style={{height: '80vh', objectFit: 'cover'}} src={mock2} alt="App Preview 2" />
            <div className='overlay'>
            <StepsPanel
                title1='1. Get Daily Challenges'
                content1='Complete a new social task each day, designed to fit your level and goals.'
                title2='2. Track Your Progress'
                content2='Watch your confidence build over time with clear visual insights into your progress.'
                title3='3. Reflect and Learn'
                content3='Discover your social style and build lasting habits for better connections.'
            />
            </div>
            </section>
        </main>
    );
}

export default Solution;