import React from 'react';
import Dropdown from "./dropdown/dropdown";
import DropContent from "./DropContent";
import './App.css';

function App() {
    return (
        <div className="flex mt-5 ml-5">
            <Dropdown showx={true}>
                <Dropdown.Toggle>text</Dropdown.Toggle>
                <Dropdown.Content>
                    <DropContent/>
                </Dropdown.Content>
            </Dropdown>
        </div>
    );
}

export default App;
