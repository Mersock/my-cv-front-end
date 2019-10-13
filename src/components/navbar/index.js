import React from 'react'
import Nav from './nav';

const Index = ({children,router}) => {
    return (
        <React.Fragment>
            <Nav {...router} />
        </React.Fragment>
    )
}

export default Index
