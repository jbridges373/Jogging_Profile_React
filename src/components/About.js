import React from 'react'
import jaddy from './images/pic.png'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={jaddy} alt='jaddy' />
                <div className='col-2'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p>My running journey started in 2018. Since then I have completed 40+ road races 5K to 10 miles. This post is about my running journey..</p>
                    <p>I am Jadwiga Wasilewska, jogging / running is my hobby, my fitness routine and my lifestyle.</p>
                    <button className='button'>Explore More</button>
                </div>
            </div>
        </div>
    )
}

export default About
