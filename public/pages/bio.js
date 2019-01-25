import React from 'react';
import axios from 'axios';

import Head from 'next/head';

import "../src/styles/main.scss";

import withAnalytics from '../src/hocs/withAnalytics';

import SanitizedHTML from 'react-sanitized-html';

import Logo from '../src/components/logo';
import Menu from '../src/components/menu';
import Language from '../src/components/language';
import Footer from '../src/components/footer';

const Bio = ({ bio }) => (
    <div>
        <Head>
            <title>Janice d'Avila - Cinematographer</title>
        </Head>
        <section>
            <header className="header">
                <div className="container">
                    <Logo />
                    <div className="nav">
                        <Menu language="en" />
                        <Language pt="/bio-pt" en="/bio" active="en" />
                    </div>
                </div>
            </header>
            <main className="contact container">
                <section className="info">
                    <h2 className="title">{bio.title}</h2>
                    <SanitizedHTML html={ bio.description } />
                </section>
            </main>
            <Footer />
        </section>
    </div>
);

Bio.getInitialProps = async () => {
    const response = await axios.get(
        `${process.env.API_URL}/bio/1`
    );
    return { bio: response.data }
}

export default withAnalytics()(Bio);