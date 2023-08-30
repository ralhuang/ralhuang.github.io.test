import React from 'react';
import { CarouselItem } from './CarouselItem';
import './Carousel.scss';

export const Carousel = () => {
    const items = [
        "1",
        "2",
        "3"
    ];

    return (
        <div className='carousel-container'>
            <div className='carousel-items'>
                {items.map((item) => {
                    return <CarouselItem item={item}></CarouselItem>
                })}
            </div>

            <div className='carousel-buttons'>
                <button className='button-arrow'>
                    <span class="material-symbols-outlined">
                        navigate_before
                    </span>
                </button>
                <div className='indicators'>
                    <button className='indicator-buttons'>
                        <span class="material-symbols-outlined">
                            more_horiz
                        </span>
                    </button>
                </div>
                <button className='button-arrow'>
                    <span class="material-symbols-outlined">
                        navigate_next
                    </span>
                </button>
            </div>

        </div>
    )

}

