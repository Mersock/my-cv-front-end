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
                    <meta name="description" content="Mersock Blogger" />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width" />
                    <link href="https://fonts.googleapis.com/css?family=Prompt&display=swap" rel="stylesheet" />
                    <link rel="stylesheet" href="https://bootswatch.com/4/sandstone/bootstrap.min.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <style jsx>{`
                    body {
                        font-family: 'Prompt', sans-serif;
                    }
                `}</style>
            </Html>
        )
    }
}

export default MyDocument