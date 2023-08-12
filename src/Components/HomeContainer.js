import React from 'react';
import "../HomeStyle.scss";
import VideoFondo from './img/FondoVideo.mp4';
import { useEffect, useState } from "react";

const HomeContainer = () => {

    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Cuando el componente se monta, activa la animación después de un breve retraso
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

    return (
        <div className="home-container">
            <video autoPlay loop muted className="video-background">
                <source src={VideoFondo} type="video/mp4" />
            </video>
            <h2 className={`welcome-text ${isVisible ? 'appear' : ''}`}>GRIS</h2>
            <a className={`link-a-productos ${isVisible ? 'appear' : ''}`} href="#titulo-productos">VER PRODUCTOS</a>
        </div> 
    );
}


export default HomeContainer;