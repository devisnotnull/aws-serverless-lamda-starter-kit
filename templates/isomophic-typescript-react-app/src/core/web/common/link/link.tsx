import React from 'react'
import { Link } from 'react-router-dom'

type StateProps = {
    to: string
}

const isValidHyperText = (text: string) => /^(http:\/\/|https:\/\/)/.test(text)

export const RouterLink: React.FC<StateProps> = ({ to, children }) =>
    isValidHyperText(to) ? <a href={to}>{children}</a> : <Link to={to}>{children}</Link>

export default RouterLink
