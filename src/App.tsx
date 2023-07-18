import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import LandingPage from "./pages/LandingPage";


function App() {
    return (

        <BrowserRouter >
            <Routes>
                <Route path="/" element={<Layout/> }>
                    <Route index element={<LandingPage/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
