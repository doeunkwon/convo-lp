import React from 'react'

function StatPanel({className, stat, title, content}) {
    return (
        <main className={`stat-panel ${className}`}>
            <section style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
            }}>
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