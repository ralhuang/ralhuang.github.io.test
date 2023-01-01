import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Hero.scss';

class Hero extends Component {
    render() {
        return(
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
                            software at <a href="https://ntst.com" target="_blank" rel="noreferrer">Netsmart Technologies</a>
                        </p>
                    </div>
                </div>
                
            </div>
        ) 
    }
}

export default Hero;