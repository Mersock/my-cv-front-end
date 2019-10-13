import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta
                        name="description"
                        content="My Blog."
                    />
                    <meta
                        charSet="utf-8"
                    />
                    <link
                        rel="icon"
                        href="/static/favicon.ico"
                        type="image/x-icon"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Itim&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style jsx>
                    {`
                        body {
                            font-family: 'Itim', cursive;
                        }
                        head {
                            font-family: 'Itim', cursive;
                        }
                    `}
                </style>
            </Html>
        )
    }
}

export default MyDocument
