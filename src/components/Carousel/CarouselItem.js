import React from 'react';

export const CarouselItem = ( {item} ) => {
    return(
        <div className='carousel-item'>
            <div>{item}</div>
            {/*
            Item image
            Item Description
            Item Link
            */}
        </div>
    )
}