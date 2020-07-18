import React from 'react';
import '../styles/About.scss';

export default function About() {
    return (
        <div className='about'>
            <h1 align='center'>Tasker</h1>

            <p>
                This is one of the project <a href='http://marikkv.github.io'>Marian Kosaniak</a> for portfolio.
            </p>
            <p>
                In this app you can: 
                <ul>
                    <li>Sign Up and Sign In.</li>
                    <li>Add, edit and delete task.</li>
                </ul>
            </p>
            <p>
                App created with using:
                <ul>
                    <li>React.js (Functional components)</li>
                    <li>Redux</li>
                    <li>Firebase (Firebase Firestore)</li>
                </ul>
            </p>
            <p>
                Additional technologies and libraries used:
                <ul>
                    <li>React Bootstrap</li>
                    <li>React SCSS</li>
                    <li>Firebase (Firebase Firestore)</li>
                    <li>Animate.css</li>
                    <li>GitHub Pages</li>
                </ul>
            </p>
        </div>
    )
}
