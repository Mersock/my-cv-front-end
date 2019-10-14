import React from 'react'
import Head from 'next/head'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

const index = ({ children, title }) => {
    return (
        <Container maxWidth="lg">
            <Head>
                <title>{process.env.APP_TITLE} | {title}</title>
            </Head>
            {children}
        </Container>
    )
}

export default index
