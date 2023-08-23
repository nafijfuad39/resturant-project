import React from 'react';
import {Routes,Route  , redirect} from 'react-router-dom';
import Menu from './Menu';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';



const Body = () => {
    return (

        <div>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/about"  element={<About/>} />
                <Route path="/Contact" element={<Contact />} />      
            </Routes>
        </div>

    );
};

export default Body;