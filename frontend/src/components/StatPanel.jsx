import React from 'react'
import '../styles/StatPanel.css'

function StatPanel({stat, title, content}) {
    return (
        <main className='stat-panel'>
            <section className='stat-panel-header'>
                <h2>
                    { stat }
                </h2>
                <h3 style={{color: 'var(--text-color)'}}>
                    { title }
                </h3>
            </section>
            <h3>
                { content }
            </h3>
        </main>
    );
}

export default StatPanel;