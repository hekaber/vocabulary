import React, {useState} from 'react';
import './App.css';
import {List} from "./list/List";
import {MenuButton} from "./shared/MenuButton";
import {Header, FillerContainer, LargeButtonContainer} from "./shared/styles";
import {WordForm} from "./form/WordForm";

function App() {

    const [showForm, setShowForm] = useState(false);

    return (
        <div className="App">
            <FillerContainer>
                <Header>Memo Vocabulaire</Header>
                <MenuButton/>
                <List/>
                <LargeButtonContainer
                    onClick={() => setShowForm(!showForm)}
                    style={{height: "9vh", lineHeight:"9vh"}}
                >
                    + Nouveau mot
                </LargeButtonContainer>
            </FillerContainer>
            <WordForm
                show={showForm}
                onHide={() => setShowForm(!showForm)}
            />
        </div>
    );
}

export default App;
