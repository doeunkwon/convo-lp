import '../styles/Problem.css'
import StatPanel from '../components/StatPanel'

function Problem() {
    return (
        <main className='Problem'>
            <header className='problem-header'>
                <h1>
                    Building connections can be tough. We get it.
                </h1>
                <h3>
                    Social anxiety makes building lasting connections challenging for many adults today.
                </h3>
            </header>
            <section className='problem-panels'>
                <StatPanel className='problem-panel' stat="36%" title="of young people are affected globally." content="A study found over 36% of young people aged 16-29 meet the criteria for Social Anxiety Disorder (SAD) across seven countries." />
                <StatPanel className='problem-panel' stat="1 in 3" title="young adults feel lonely." content="One-third of young adults aged 18–25 feel lonely, which is associated with depression and lack of purpose, per Newport Institute." />
                <StatPanel className='problem-panel' title="Small social interactions boost life satisfaction." content="A study of 3,266 participants found brief interactions with strangers boost life satisfaction, backed by over 60,000 responses." />
            </section>
            <p>Sources: [Stat 1] National Institute of Mental Health (NIMH), based on the National Comorbidity Survey Replication (NCS-R). [Stat 2] Harvard Graduate School of Education and Making Caring Common. [Stat 3] Ascigil, E., Gunaydin, G., Selcuk, E., Sandstrom, G. M., & Aydin, E. (2023). Minimal Social Interactions and Life Satisfaction: The Role of Greeting, Thanking, and Conversing. Social Psychological and Personality Science, 0(0).</p>
        </main>
    )
}

export default Problem;