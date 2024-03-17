import './style.css'
import React, { useEffect, useState } from "react"


const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Function to go to the next slide
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
  
    useEffect(() => {
      const interval = setInterval(goToNextSlide, 3000); // Change slide every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="carousel-container">
        <div className="carousel">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide `}
              style={{ transform: `translateX(-${ + currentIndex * 100}%)` }}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default Carousel;
  