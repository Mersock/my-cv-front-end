import React from 'react'
import Head from 'next/head'
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress'
import Header from './header';
import Footer from './footer'

Router.events.on('routeChangeStart', url => {
    NProgress.start();
})

Router.events.on('routeChangeComplete', url => {
    NProgress.done()
});

Router.events.on('routeChangeError', (err, url) => {
    NProgress.done()
});

NProgress.configure({ showSpinner: false });

const Index = (props) => {
    const { children, title } = props
    const route = useRouter()

    return (
        <React.Fragment>
            <Head>
                <title>Mersock Blogger {title ? `| ${title}` : ''}</title>
            </Head>
            <Header pathname={route.pathname} />
            <div className="container">
                <div className="row">
                    {children}
                </div>
            </div>
            <Footer />
            <style jsx>{`
                .container{
                    margin-top:70px
                }
            `}</style>
        </React.Fragment>
    )
}

export default Index
