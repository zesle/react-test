import React, {useState} from 'react';
import Dropdown from "./dropdown/dropdown";
import DropContent from "./DropContent";
import './App.css';

function App() {
    const [filters, setFilters] = useState<any>([])

    const handleClick = () => {
        setFilters((prevState: any) => {
            return [...prevState, {open: true, name: 'filter 1'}]
        })
    }

    return (
        <div className="flex mt-5 ml-5">
            <button onClick={handleClick}>Add filter</button>

            {filters.map((filter: any, index: any) => {
                return (
                    <div key={index} className="mt-5 ml-5">
                        <Dropdown>
                            <Dropdown.Toggle open={filter.open}>{filter.name}</Dropdown.Toggle>
                            <Dropdown.Content>
                                <DropContent/>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                )
            })}
        </div>
    );
}

export default App;
