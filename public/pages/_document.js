import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import NextHeadWithInlineCss from "../src/lib/NextHeadWithInlineCss";
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
                <NextHeadWithInlineCss/>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
