import React from 'react'
import {
    Jumbotron
} from 'reactstrap'

const Footer = () => {
    const date = new Date()
    const year = date.getFullYear();
    return (
        <footer>
            <Jumbotron>
                <p className="mb-1"> Copyright &copy; {year == 2019 ? year : `2019 - ${year}`} Mersock Blogger. All rights reserved.</p>
            </Jumbotron>
            <style jsx>{`
                footer {
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    text-align: center;
                    margin-top:30px
                }
                `}
            </style>
        </footer >
    )
}

export default Footer
