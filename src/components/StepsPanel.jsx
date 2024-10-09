import React from 'react'

function StepsPanel({
    title1,
    content1,
    title2,
    content2,
    title3,
    content3
}) {
    return (
        <main style={{
            width: '80vw',
            flexShrink: '0',
            borderRadius: '50px',
            border: '2px solid var(--White, #FBF7F4)',
            background: 'rgba(246, 240, 235, 0.50)',
            backdropFilter: 'blur(15px)',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            padding: '50px'
        }}>
            <section style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '20px',
            }}>
                <h3 style={{color:'var(--text-color)'}}>{title1}</h3>
                <h3>{content1}</h3>
            </section>

            <section style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '20px',
            }}>
                <h3 style={{color:'var(--text-color)'}}>{title2}</h3>
                <h3>{content2}</h3>
            </section>

            <section style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                gap: '20px',
            }}>
                <h3 style={{color:'var(--text-color)'}}>{title3}</h3>
                <h3>{content3}</h3>
            </section>
        </main>
    );
}

export default StepsPanel;