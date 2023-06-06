import React from "react";

export default function About() {

    return (
        <div className='container'>
            <div className='card'>
                <img
                    src='images/me.jpg'
                    alt='Sadie Mantlo'
                    className='sadie'
                />
                <div className='card-body'>
                    <p className='card-text' style={{ textAlign: 'center' }}>My name is Sadie and I am currently a UCSD coding bootcamp student. My knowledge includes HTML, CSS, JavaScript, Express.js, NoSQL and REACT.</p>
                </div>
            </div>
        </div>

    )
}