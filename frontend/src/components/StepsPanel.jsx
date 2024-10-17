import React from 'react'
import VerticalLine from '../components/VerticalDivider'
import '../styles/StepsPanel.css'

function StepsPanel({
    title1,
    content1,
    title2,
    content2,
    title3,
    content3
}) {
    return (
        <main className='steps-panel'>
            <section style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '20px',
                textAlign: 'left',
                padding: '0px 15px'
            }}>
                <h3 style={{color:'var(--text-color)'}}>{title1}</h3>
                <h3>{content1}</h3>
            </section>


            <VerticalLine className='steps-panel-divider'/>

            <section style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '20px',
                textAlign: 'left',
                padding: '0px 15px'
            }}>
                <h3 style={{color:'var(--text-color)'}}>{title2}</h3>
                <h3>{content2}</h3>
            </section>

            <VerticalLine className='steps-panel-divider'/>

            <section style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '20px',
                textAlign: 'left',
                padding: '0px 15px'
            }}>
                <h3 style={{color:'var(--text-color)'}}>{title3}</h3>
                <h3>{content3}</h3>
            </section>
        </main>
    );
}

export default StepsPanel;