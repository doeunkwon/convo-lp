import '../styles/Solution.css'
import mock2 from '../assets/solution.png'
import StepsPanel from '../components/StepsPanel'

function Solution() {
    return (
        <main className='Solution'>
            <section className='solution-content'>
                <h2>
                    Introducing Convo,
                    <br />
                    <span style={{color:'var(--light-text-color)'}}>Your social sidekick.</span>
                </h2>
                <img className='solution-image' src={mock2} alt="App Preview 2" />
                <StepsPanel
                    stepsPanelClassName='solution-panel'
                    verticalDividerClassName='solution-panel-divider'
                    title1='1. Get Daily Challenges'
                    content1='Complete a new social task each day, designed to fit your level and goals.'
                    title2='2. Track Your Progress'
                    content2='Watch your confidence build over time with clear visual insights into your progress.'
                    title3='3. Reflect and Learn'
                    content3='Discover your social style and build lasting habits for better connections.'
                />
            </section>
        </main>
    );
}

export default Solution;