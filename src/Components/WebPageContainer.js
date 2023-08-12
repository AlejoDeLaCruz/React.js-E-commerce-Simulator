import React from 'react';
import ItemListContainer from './ItemListContainer';
import HomeContainer from "./HomeContainer";
import InfoContainer from './InfoContainer';
import Footer from './Footer';




const WebPageContainer = () => {
    return (
        <>
            <div className="home-container">
                <HomeContainer/>
            </div> 
            <div className="info-container">
                <InfoContainer/>
            </div> 
            <div className="item-list-container">
                <ItemListContainer/>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </>        
    )
}


export default WebPageContainer;