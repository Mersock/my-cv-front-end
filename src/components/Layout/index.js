import React from 'react'
import Nav from './Nav'

const index = ({ children }) => {
    return (
        <nav>
            <Nav />
            {children}
        </nav>
    )
}

export default index
