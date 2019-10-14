import React from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'
import Nav from './nav';

Router.events.on('routeChangeStart',url => {
    NProgress.start();
});

Router.events.on('routeChangeComplete',url => {
    NProgress.done();
});

Router.events.on('routeChangeError',(err,url) => {
    NProgress.done();
});

const Index = ({children,router}) => {
    return (
        <React.Fragment>
            <Nav {...router} />
        </React.Fragment>
    )
}

export default Index
