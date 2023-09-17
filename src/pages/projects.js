import React from 'react';
import { Carousel } from '../components/Carousel/Carousel.js';
import './projects.scss';

export const Projects = () => {
        return(
            <div id='projects-scroll' className='projects-container'>
                <Carousel/>
            </div>
        );
}
    