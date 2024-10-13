import '../styles/Problem.css'
import StatPanel from '../components/StatPanel'

function Problem() {
    return (
        <main className='Problem'>
            <header className='problem-header'>
                <h1>
                    Building connections
                    can be tough. We get it.
                </h1>
                <h3>
                    Social anxiety makes building lasting connections challenging for many adults today.
                </h3>
            </header>
            <section className='problem-panels'>
                <StatPanel className='problem-panel' stat="12%" title="of U.S. adults experience anxiety." content="About 12.1% of U.S. adults experience social anxiety disorder in their lives, per the NIMH’s National Comorbidity Survey." />
                <StatPanel className='problem-panel' stat="36%" title="of young people are affected globally." content="A study found over 36% of young people aged 16-29 meet the criteria for Social Anxiety Disorder (SAD) across seven countries." />
                <StatPanel className='problem-panel' stat="18%" title="underestimate the affects of anxiety." content="One in six young people aged 16-29 believe they have no social anxiety, yet 18% meet the criteria for Social Anxiety Disorder (SAD). " />
            </section>
            <p style={{width: '70%'}}>Source: [Stat 1] National Institute of Mental Health (NIMH), based on the National Comorbidity Survey Replication (NCS-R). [Stat 2 & 3] Jefferies P, Ungar M (2020) Social anxiety in young people: A prevalence study in seven countries. PLoS ONE 15(9): e0239133.</p>
        </main>
    )
}

export default Problem;