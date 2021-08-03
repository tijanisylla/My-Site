import React from 'react';


const Settings = {

  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  opacity: 2,
  dots: true,
  nextArrow: <SampleNextArrow/>,
  prevArrow: <SamplePrevArrow/>,
}

function SampleNextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{
      ...style,
     position : 'absolute',
   
     
    }}
   
      onClick={onClick}>


      </div>

  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{
      ...style,
      position: 'absolute'
    }}
      onClick={onClick}>
     
    </div>

  );
}

export default Settings;