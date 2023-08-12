import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
import WebPageContainer from './WebPageContainer';
import Cart from './Cart';
import '../Style.scss';

const Main = () => {
    const location = useLocation();
    const isGuitarrasPage = location.pathname.includes("/Guitarras");
    const isBajosPage = location.pathname.includes("/Bajos");
    const isAmplificadoresPage = location.pathname.includes("/Amplificadores");
  
    return (
      <main className={`main-container ${isGuitarrasPage ? 'fondo-guitarras' : ''} ${isBajosPage ? 'fondo-bajos' : ''} ${isAmplificadoresPage ? 'fondo-amplificadores' : ''}`}>
      <Routes>
        <Route path="/" element={<WebPageContainer />} />
        <Route path="/:category" element={<ItemListContainer />} />
        <Route path="/:category/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </main>
  );
};

export default Main;