import { useState } from "react";
import PropTypes from "prop-types";
import "./slideimage.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const SlideImage = ({ data }) => {

  const [slide,setSlide]=useState(0);
  
  const nextSlide=()=>{
    setSlide(slide ===data.length-1 ? 0 : slide+1)

  }
  const prevSlide=()=>{
       setSlide(slide === 0 ? data.length-1: slide-1 )
  }
  return (
   
    <div className="slide_image ">

      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
      {data.map((item, index) => (
        <img src={item.src} alt={item.alt} key={index} className={slide === index ? "slide" : "slide slide-hidden"} />
      ))}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
      <span className="indicators">
        {data.map((_, index) => (
          <button key={index} onClick={()=>setSlide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive" }></button>
        ))}
      </span>
    </div>
   
  );
};

SlideImage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SlideImage;
