import React, {createContext} from 'react';
import NavBar from "./NavBar"
import Main from "./Main"
import { BrowserRouter } from "react-router-dom"
import CustomProvider from "./CustomProvider"
import "./firebase"

export const contexto = createContext()

function App() {
    return (
        <CustomProvider>
            <BrowserRouter>
                <NavBar />
                <Main />
            </BrowserRouter>
        </CustomProvider>
    )
}

export default App

