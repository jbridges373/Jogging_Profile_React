import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <ul>
                    <li className='nav-item'>
                        <a href='/'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#achievements'>Achievements</a>
                    </li>                    
                </ul>
                <div className='bottom'>
                    <span className='line'></span>
                    <p>2022 Jogging, Inc. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
