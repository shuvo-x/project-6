import React from 'react';
import './About.css';

function About() {
    return (
       <>
       <div className='about'>
           <div className='container'>
               <div clasName='row'id='about-row'>
               <div className='about-content'>
                     <h4 className='text-center'>Welecome to our company</h4>
                       <p> It is a long established fact that a reader will be distracted by 
                        the readable content of a page when looking at its layout.
                        The point of using Lorem Ipsum is that it has a more-or-less
                        normal distribution of letters, as opposed to </p>
                     </div>
                   <div className='col-md-8'id='about-col'>
                       <img src='card-02.jpg'id='about-img'alt='img1' />
                        <img src='card-03.jpg'id='about-img'alt='img2' />
                        <img src='card-06.jpg'id='about-img'alt='img3' />
                   </div>
               </div>
           </div>
       </div>
       
       
       </>
    )
}

export default About
