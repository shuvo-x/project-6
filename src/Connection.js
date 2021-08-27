import React from 'react';
import ImageSlider from './Components/HomePage/ImageSlider';
import {SliderData} from './Components/HomePage/SliderData';
import About from './Components/AboutPage/About';

function Connection() {
    return (
       <>
       <ImageSlider slides={SliderData}/>
       <About />
     
       </>
    )
}

export default Connection
