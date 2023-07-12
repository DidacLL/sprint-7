import React from 'react';
import './App.css';
import {Form} from "./components/forms/Form";
import {ITService} from "./components/classes/ITService";
import {WEBService} from "./components/classes/WEBService";

const inputValues = [
    new WEBService("WEB",500,"Una pàgina web (500€)",1,1),
    new ITService("SEO",300,"Una consultoria SEO (300€)"),
    new ITService("ADS",200,"Una campanya de Google Ads (200€)")
]
function App() {
  return (
    <div className="App">
        <Form servicesList={inputValues}></Form>
    </div>
  );
}

export default App;
