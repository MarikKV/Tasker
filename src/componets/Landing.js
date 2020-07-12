import React from 'react';
import '../styles/Landing.scss'

export default function Landing() {
    return (
        <div className='landing'>
            
            <div className='landing_box welcome animate__animated animate__bounce'>Welcome to Tasker!</div>
            <div className='landing_box join animate__animated animate__bounceInRight animate__delay-1s'>Join to us</div>
            <div className='landing_box create animate__animated animate__bounceInLeft animate__delay-2s'>Create your tasks</div>
            <div className='landing_box save animate__animated animate__bounceInUp animate__delay-3s'>Save and edit them</div>

        </div>
    )
}
