import React, { useState } from 'react'

interface IProps {
    toggle: any
    content: any
}

export const ToggleModal: React.FC<IProps> = ({ toggle, content }) => {
    const [isShown, setIsShown] = useState(false)
    const hide = () => setIsShown(false)
    const show = () => setIsShown(true)

    return (
        <React.Fragment>
            {toggle(show)}
            {isShown && content(hide)}
        </React.Fragment>
    )
}
