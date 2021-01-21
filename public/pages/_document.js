import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ToastContainer } from 'react-toastify';

export default class MyDocument extends Document {

    lang = 'en';

    static getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const { pathname, renderPage } = ctx;
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();

        if (!pathname.startsWith("/static")) {
          this.lang = pathname.startsWith("/pt") ? "pt" : "en";
        }

        return { ...page, styleTags, lang: this.lang };
    }

    render() {
        return (
            <html lang={this.props.lang}>
                <Head>
                    {this.props.styleTags}
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="author" content="Janice d'Avila - Cinematographer" />
                    <meta name="google-site-verification" content="jh46bLT3yK5mf-_D3kjzn73e6j52QgMj8idZeXS7xds" />
                    <meta name="description" content="Janice d'Avila - Cinematographer" />
                    <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
