import React, { Component } from 'react';
import { Carousel } from '../components/Carousel/Carousel';
import './projects.scss';

class Projects extends Component {
    render() {
        return(
            <div className='projects-container'>
                <Carousel/>
            </div>
        );
        
    }
}


export default Projects;
    