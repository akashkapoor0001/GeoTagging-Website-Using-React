import React from 'react';
import './header.css';
import geotagging from '../../assets/geotagging.png'

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className='gpt3__header-content'>
                <h1 className='gradient__text'>Empowering Communities, Securing Neighborhoods: Your Guardian in the Digital Era.</h1>
                <div className='gpt3__header-content__input'>
                    <button type='button'>Get Started</button>
                </div>

            </div>
            <div className='gpt3__header-image'>
                <img src={geotagging} alt='geotagging'/>
            </div>
        </div>
    )
}

export default Header
