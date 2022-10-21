import React, {useContext, createContext, useState, useMemo} from 'react';

export type DropdownContextValue = {
    show: boolean
};

const Dropdown = createContext<DropdownContextValue | null>(null);

const DropdownProvider = ({children}: { children: React.ReactNode }) => {
    /* const [dropdownState, setCurrent] = useState({show: false});

     const setDropdownState = (user: any) => {
         setCurrent(user);
     };

     return <Dropdown.Provider value={[dropdownState, setDropdownState]}>{children}</Dropdown.Provider>
     */

    const [show] = useState(false)

    const context = useMemo(
        () => ({
            show,
        }),
        [show],
    );

    return <Dropdown.Provider value={context}>{children}</Dropdown.Provider>
}

const useDropdown = () => useContext(Dropdown);

export {DropdownProvider, useDropdown};
