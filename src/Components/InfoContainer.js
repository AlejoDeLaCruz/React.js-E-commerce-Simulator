import React from 'react';
import imagenRandom from './img/imagenRandom.jpg';
import imagenRandom2 from './img/imagenRandom2.jpg';  // Importa la imagen aquí
import '../InfoStyle.scss';
import { useEffect, useState, useRef } from "react";

const InfoContainer = () => {
    const textRef = useRef([]);
    const [isVisible, setIsVisible] = useState(Array(textRef.current.length).fill(false));
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => {
              const updatedArray = [...prev];
              updatedArray[index] = true;
              return updatedArray;
            });
          }
        });
      });
  
      textRef.current.forEach((textEl) => {
        observer.observe(textEl);
      });
  
      return () => {
        observer.disconnect();
      };
    }, []);
  
    return (
      <>
        <h1>About us</h1>
  
        <div className="containers">
          <div className="text-containers">
            <img src={imagenRandom} className="imagenRandom" />
            <p
              ref={(el) => (textRef.current[0] = el)}
              className={`texto-random ${isVisible[0] ? 'appear' : ''}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla massa id velit fringilla hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla massa id velit fringilla hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla massa id velit fringilla hendrerit.
            </p>
          </div>
        </div>
        
        <div className="containers">
          <div className="text-containers">
            <p
              ref={(el) => (textRef.current[0] = el)}
              className={`texto-random ${isVisible[0] ? 'appear' : ''}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla massa id velit fringilla hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla massa id velit fringilla hendrerit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla massa id velit fringilla hendrerit.
            </p>
            <img src={imagenRandom2} className="imagenRandom2" />
          </div>
        </div>
      </>
    );
  }

export default InfoContainer;