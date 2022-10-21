import React, {useEffect} from "react";
import {DropdownProvider, useDropdown} from './context'

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
    // children: (props: any) => React.ReactNode
    children: React.ReactNode
}

export const Toggle = ({children}: ToggleProps) => {
    const handleClick = (evt: any) => {
        console.log(evt)
    }

    const handleBlur = (evt: any) => {
        console.log(evt)
    }

    //   {(props:any) => <button {...props}>text</button>}

    const props = {onClick: handleClick, onBlur: handleBlur}
    //  children.props = props

    // return (<>{children(props)}</>)

    return <button
        type="button" {...props}
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2
        text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        {children}
    </button>
}

interface ContentProps {
    // children: (props: any) => React.ReactNode
    children: React.ReactNode
}

export const Content = ({children}: ContentProps) => {
    const show = useDropdown()

    useEffect(()=>{
        console.log(show)
    },[])

    return (
        <>{show ? <div className="content mt-2">{children}</div> : ''}</>
    )
}

Dropdown.Toggle = Toggle
Dropdown.Content = Content

export default Dropdown
