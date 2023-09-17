import React from 'react';
import './Hero.scss';

export const Hero = () => {

    return (
        <div className='hero-container'>
            <div className='hero-content'>
                <div className='intro'>
                    Hi! My name is
                </div>
                <div className='name'>
                    <h2 className='name-text'>Ralph Huang.</h2>
                </div>
                <div className='statement'>
                    <h3>I build things using the web!</h3>
                </div>
                <div className='intro'>
                    <p className='intro-text'>
                        I am a software engineer from New York who loves
                        creating new experiences and problem solving.
                        Currently, I am focused on improving healthcare
                        software at <a href="https://ntst.com" target="_blank" rel="noreferrer">Netsmart Technologies</a>.
                    </p>
                    <p>
                        If you ever see me send you a message like "wadsdfjklllllllllll", 
                        it was most likely one of my two feline friends: Columbus or Juju.
                    </p>
                    <p>
                        Otherwise, when I'm not working, I am either spending time with my 
                        friends and family, or playing video games.
                    </p>
                </div>
            </div>

        </div>
    )
}