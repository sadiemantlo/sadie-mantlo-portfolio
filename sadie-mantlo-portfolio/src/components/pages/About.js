import React from "react";

export default function About() {
    const styles = {
        card: {
            width: '40rem',
            justifyContent: 'center',
            alignItems: 'center',
            display: '',
        },
        img: {
            width: '20rem',
            display: 'inline',
        },
        container: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    };

    return (
        <div style={styles.container}>
            <div className='card' style={styles.card}>
                <img
                    src='images/me.jpg'
                    alt='Sadie Mantlo'
                    style={styles.img}
                />
                <div className='card-body'>
                    <p className='card-text' style={{ textAlign: 'center' }}>My name is Sadie and I am currently a UCSD coding bootcamp student. My knowledge includes HTML, CSS, JavaScript, Express.js, NoSQL and REACT.</p>
                </div>
            </div>
        </div>

    )
}