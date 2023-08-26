import React from 'react';
import './App.css'
import {Setter} from "./components/Setter/Setter";
import s from "./components/Conter/Counter.module.css";
import {Counter} from "./components/Conter/Counter";

function App() {
    return (
        <div className="App">
            <div className="Setter">
                <Setter />
            </div>
            <div className={s.Counter}>
                <Counter/>
            </div>
        </div>
    );
}

export default App;
