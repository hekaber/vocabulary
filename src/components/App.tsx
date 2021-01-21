import React from 'react';
import './App.css';
import {List} from "./list/List";
import {MenuButton} from "./shared/MenuButton";
import {Header} from "./shared/styles";
import {LargeButton} from "./shared/LargeButton";

function App() {
    return (
        <div className="App">
            <Header>Memo Vocabulaire</Header>
            <MenuButton/>
            <List/>
            <LargeButton/>
        </div>
    );
}

export default App;
