import React, { useState } from 'react';
import { CarouselItem } from './CarouselItem';
import './Carousel.scss';

export const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const updateIndex = (index) => {
        if (index < 0) {
            index = 0;
        } else if (index >= items.length) {
            index = items.length - 1;
        }

        setCurrentIndex(index);
    }

    const items = [
        {
            title: "Discord Audio Bot",
            description: "A discord bot that can join channels and play requested audio from Spotify and Youtube using their respective APIs.",
            icon: ""
        },
        {
            title: "Game Title",
            description: "A discord bot that can join channels and play requested audio from Spotify and Youtube using their respective APIs.",
            icon: ""
        },
        {
            title: "3rd Title",
            description: "A discord bot that can join channels and play requested audio from Spotify and Youtube using their respective APIs.",
            icon: ""
        }
    ];

    return (
        <div className='carousel-container'>
            <div 
                className='carousel-items'
                style={{ transform: `translate(-${currentIndex * 100}%)` }}
            >
                {items.map((item) => {
                    return <CarouselItem item={item} width={"100%"}/>
                })}
            </div>

            <div className='carousel-footer'>
                <button 
                    className='button-arrow'
                    onClick={() => {
                        updateIndex(currentIndex - 1);
                    }}
                >
                    <span className='material-symbols-outlined'>
                        navigate_before
                    </span>
                </button>
                <div className='indicators'>
                    {items.map((item, index) => {
                        return (
                            <button 
                                className='indicator-buttons'
                                onClick={() => {
                                    updateIndex(index);
                                }}
                            >
                                <span className={`material-symbols-outlined  
                                    ${index===currentIndex ? 
                                        'indicator-active' : 
                                        'indicator-inactive'}`}
                                >
                                    adjust
                                </span>
                            </button>
                        );
                    })}
                </div>
                <button 
                    className='button-arrow'
                    onClick={() => {
                        updateIndex(currentIndex + 1);
                    }}
                >
                    <span className='material-symbols-outlined'>
                        navigate_next
                    </span>
                </button>
            </div>

        </div>
    )

}

