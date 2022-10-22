import React, {useContext, useState} from 'react';

interface DropdownContextInterface {
    show?: boolean
    setShow: () => void
}

const defaultState = {
    show: true,
    setShow: () => undefined as any
};

const DropdownContext = React.createContext<DropdownContextInterface>(defaultState);

const DropdownProvider = ({children}: { children: React.ReactNode }) => {
    const [show, setShow0] = useState<boolean>(false)

    const setShow = () => {
        setShow0(!show)
    }

    const value = {show, setShow}

    return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
}

const useDropdown = () => useContext(DropdownContext);

export {DropdownProvider, useDropdown}
