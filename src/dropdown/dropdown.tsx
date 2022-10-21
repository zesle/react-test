import React, {useEffect} from "react";
import {DropdownProvider, useDropdown} from './context'

interface DropdownProps {
    showx: boolean,
    children: React.ReactNode
}

const Dropdown = ({showx, children}: DropdownProps) => {
    const {show, setShow} = useDropdown()
    useEffect(() => {
        setTimeout(()=>{
            if (setShow) {
                setShow()
            }
        },300)
    }, [show, showx])

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
    const {show, setShow} = useDropdown()
    const handleClick = (evt: any) => {
        console.log(show)
        if (setShow) {
            setShow()
        }

        console.log(show)
    }

    const handleBlur = (evt: any) => {
        // if (setShow) {
        //  setShow()
        // }
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

    return (
        <>{show && show.show ? <div className="absolute content mt-2">{children}</div> : ''}</>
    )
}

Dropdown.Toggle = Toggle
Dropdown.Content = Content

export default Dropdown
