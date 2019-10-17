import React from 'react'
import Head from 'next/head'
import Router from 'next/router';
import NProgress from 'nprogress'
import Navbar from './navbar';

Router.events.on('routeChangeStart', url => {
    NProgress.start();
})

Router.events.on('routeChangeComplete', url => {
    NProgress.done()
});

Router.events.on('routeChangeError', (err, url) => {
    NProgress.done()
});

const index = (props) => {
    const { children } = props
    
    return (
        <React.Fragment>
            <Head>
                <title>Mersock Blogger</title>
            </Head>
            <Navbar pathname={Router.pathname} />
            <div className="container">
                {children}
            </div>
            <style jsx>{`
                .container{
                    margin-top:70px
                }
            `}</style>
        </React.Fragment>
    )
}

export default index
