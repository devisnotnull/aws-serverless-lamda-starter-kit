import * as React from 'react'

import { IHeadingProps, Sizes } from './heading.props';

const headerSize = (size: Sizes, children: React.ReactNode) => {
    switch (size) {
    case 'xsmall':
        return <h4>{children}</h4>
    case 'small':
        return <h3>{children}</h3>
    case 'medium':
        return <h2>{children}</h2>
    case 'large':
        return <h1>{children}</h1>
    default:
        return <h1>{children}</h1>
    }
}

export const Heading: React.FC<IHeadingProps> = ({ children, size }) => headerSize(size, children);

export default Heading
