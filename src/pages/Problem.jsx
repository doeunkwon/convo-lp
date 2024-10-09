import '../styles/Problem.css'
import StatPanel from '../components/StatPanel'

function Problem() {
    return (
        <main className='Problem'>
            <header className='header'>
                <h1>
                    Building connections
                    can be tough. We get it.
                </h1>
                <h3>
                    Social anxiety makes building lasting connections challenging for many adults today.
                </h3>
            </header>
            <section className='panels'>
                <StatPanel stat="65%" title="feel socially unconfident." content="Many millennials feel uneasy in face-to-face interactions, making it hard to connect comfortably." />
                <StatPanel stat="40%" title="feel awkward in small talk." content="Many millennials often feel uncomfortable or awkward when required to engage in casual conversation." />
                <StatPanel stat="71%" title="prefer silence over talking." content="Most Americans would rather avoid small talk, highlighting discomfort in casual social interactions." />
            </section>
        </main>
    )
}

export default Problem;