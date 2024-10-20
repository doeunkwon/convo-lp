import '../styles/Solution.css'
import solutionImage from '../assets/solution-image.png'
import StepsPanel from '../components/StepsPanel'

function Solution() {
    return (
        <main className='Solution'>
            <section className='solution-content'>
                <h2 style={{
                    color: 'transparent',
                    backgroundImage: 'linear-gradient(45deg, var(--orange-color), var(--text-color))',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                }}>
                    Introducing Convo,
                    <br />
                    <span style={{color:'var(--light-text-color)'}}>Your social sidekick.</span>
                </h2>
                <img className='solution-image' src={solutionImage} alt="App Preview 2" />
                <StepsPanel
                    stepsPanelClassName='solution-panel'
                    verticalDividerClassName='solution-panel-divider'
                    title1='1. Receive bite-sized tasks.'
                    content1='Complete just one social challenge each day, tailored to your level and goals.'
                    title2='2. Track your performance.'
                    content2='Watch your confidence build over time with clear visual insights into your progress.'
                    title3='3. Become more social.'
                    content3='Discover your social style and build lasting habits for better connections.'
                />
            </section>
        </main>
    );
}

export default Solution;