import React from 'react'
import '../styles/StatPanel.css'

function StatPanel({stat, title, content}) {
    return (
        <main className='stat-panel'>
            <section className='stat-panel-header'>
                {
                    stat && (
                        <h2>
                            { stat }
                        </h2>
                    )
                }
                <h3 style={{
                    color: stat ? 'var(--text-color)' : 'transparent',
                    backgroundImage: stat ? 'none' : 'linear-gradient(45deg, var(--orange-color), var(--text-color))',
                    WebkitBackgroundClip: stat ? 'none' : 'text',
                    backgroundClip: stat ? 'none' : 'text',
                    fontWeight: stat ? 'normal' : '600'
                }}>
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