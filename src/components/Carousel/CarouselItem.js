import React from 'react';
import './CarouselItem.scss';
import defaultImage from '../../assets/project_images/default_project_card.PNG';

export const CarouselItem = ( {item} ) => {

    return(
        <div className='carousel-item'>
            <div>
                <h1 className='item-title'>{item.title}</h1>
                <p className='item-text'>{item.description}</p>
            </div>
            <img src={defaultImage} alt="Cannot render"></img>
            <div className='item-icon'></div>
        </div>
    )
}