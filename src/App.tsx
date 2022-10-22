import React, {useEffect, useState} from 'react';
import Dropdown from "./dropdown/dropdown";
import DropContent from "./DropContent";
import './App.css';

function App() {
    const [filters, setFilters] = useState<any>([{open: true, name: 'filter 0'}])

    useEffect(() => {
        console.log(filters)
    }, [filters])

    const handleClick = () => {
        setFilters((prevState: any) => {
            return [...prevState, {open: true, name: 'filter ' + prevState.length}]
        })
    }

    return (
        <div className="flex mt-5 ml-5">
            <button onClick={handleClick}>Add filter</button>

            {filters.map((filter: any, index: any) => {
                const props = {
                    filter: filter,
                    onToggle: (evt: any) => {
                        setFilters((prevState: any) => {
                            const prevState0 = [...prevState];
                            prevState0[index].open = evt
                            return prevState0
                        })
                    }
                }

                return (
                    <div key={index} className="mt-5 ml-5">
                        <Dropdown>
                            <Dropdown.Toggle {...props}>{filter.name}</Dropdown.Toggle>
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
