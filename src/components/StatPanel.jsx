import React from 'react'

function StatPanel({stat, title, content}) {
    return (
        <main style={{
            width: '20vw',
            flexShrink: '0',
            borderRadius: '50px',
            border: '2px solid var(--White, #FBF7F4)',
            background: 'rgba(246, 240, 235, 0.50)',
            backdropFilter: 'blur(15px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            padding: '50px'
        }}>
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