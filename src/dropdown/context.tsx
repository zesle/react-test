import React, {useContext, useState} from 'react';

interface DropdownContextInterface {
    show?: boolean
    setShow: () => any
}

const defaultState = {
    show: true,
    setShow: () => undefined as any
};

const DropdownContext = React.createContext<DropdownContextInterface>(defaultState);

const DropdownProvider = ({children}: { children: React.ReactNode }) => {
    const [show, setShow] = useState<boolean>(false)

    const setShow0 = (value: boolean = false) => {
        setShow(!value)
    }

    const value = {show, setShow: setShow0}

    return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
}

const useDropdown = () => useContext(DropdownContext);

export {DropdownProvider, useDropdown}
