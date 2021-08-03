
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import React, {useState} from 'react';
import Settings from './config/Arrows-config'
import data from './Data'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Service = () => {

 


 

  
    
  return (
<>

 <div className="service"> 

      <div className="service-heading">
        <h1>Portfolio</h1>
        <p>You can slide or Click the Arrows <FaArrowLeft color={'#ffff'}/>  <FaArrowRight color={'#ffff'}/>to see the rest of the projetcs</p>
        </div>
        
        <Slider {...Settings}>
        
          {data.map(i => (
           <div  key={i} className="b-container">
             <div className="card">
              <a href={i.link}><img src={i.image} alt="img mapping"/></a>
                  <div className="type-card">
                  <span>{i.type}</span>
                  </div>
                  <div className="service-box-text">
                    <span>{i.description}</span>
              </div>
              </div>
            
           </div>
           
          ))
          
          
}


</Slider>
        
      </div> 
     
    
</>
  )
}

export default Service


  