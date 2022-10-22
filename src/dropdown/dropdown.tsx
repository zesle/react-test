import React, {useEffect} from "react";
import {DropdownProvider, useDropdown} from './context'
import useOnClickOutside from "use-onclickoutside";

interface DropdownProps {
    children: React.ReactNode
}

const Dropdown = ({children}: DropdownProps) => {
    return (
        <div>
            <DropdownProvider>{children}</DropdownProvider>
        </div>
    )
}

interface ToggleProps {
    filter: any,
    onToggle: React.Dispatch<any>,
    children: React.ReactNode
}

export const Toggle = ({filter, onToggle, children}: ToggleProps) => {
    const {show, setShow} = useDropdown()

    const ref = React.useRef(null)
    useOnClickOutside(ref, setShow)

    useEffect(() => {
        if (filter.open) setShow()
    }, [])

    useEffect(() => {
        onToggle(show)
    }, [show])

    const handleClick = (evt: any) => {
        setShow()
    }

    const props = {onClick: handleClick}

    return <button ref={ref} type="button" {...props} className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2
        text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        {show ? 'true' : 'false'} == {children}
    </button>
}

interface ContentProps {
    // children: (props: any) => React.ReactNode
    children: React.ReactNode
}

export const Content = ({children}: ContentProps) => {
    const {show} = useDropdown()

    return (
        <>{show ? <div className="absolute content mt-2">{children}</div> : ''}</>
    )
}

Dropdown.Toggle = Toggle
Dropdown.Content = Content

export default Dropdown
