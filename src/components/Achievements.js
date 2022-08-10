import React from 'react'
import user1 from "./images/user1.png"
import user2 from './images/user2.jpg'
import user3 from './images/user3.jpg'
import './Achievements.css'

const Testimonials = () => {
    return (
        <div className='achievements' id='achievements'>
            <div className='container'>
                <h2>Achievements</h2>
                <span className='line'></span>
                <div className='content'>
                    <div className='card'>
                        <img src={user1} alt='user1'/>
                        <p>Burnley 10k</p>
                        <p><span>Finish Time: 55 minutes 50 seconds</span></p>
                        <p>Year: July 17th 2022</p>                        
                    </div>
                    <div className='card'>
                        <img src={user2} alt='user1'/>
                        <p>Parkrun 5k</p>
                        <p><span>Personal Best: 25 minutes 11 seconds</span></p>
                        <p>Location: Burnley</p>
                        <p>Year: 2022</p>
                    </div>
                    <div className='card'>
                        <img src={user3} alt='user1'/>
                        <p>Burnley 10k</p>
                        <p><span>Finish Time: 1 hour 4 minutes</span></p>
                        <p>Year: July 21st 2019</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
