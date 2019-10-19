import React from 'react'

const footer = () => {
    const date = new Date()
    const year = date.getFullYear();
    return (
        <footer>
            <div className="jumbotron">
                <div className="lead text-center">
                    Copyright &copy; {year == 2019 ? year : `2019 - ${year}`} Mersock Blogger. All rights reserved.
            </div>
            </div>
            <style jsx>{`
                 footer {
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    text-align: center;
                    margin-top:100px
                 }
            `}
            </style>
        </footer>
    )
}

export default footer
