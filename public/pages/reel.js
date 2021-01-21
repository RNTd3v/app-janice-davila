import React from 'react';
import axios from 'axios';
import Vimeo from '@u-wave/react-vimeo';

import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

import Logo from '../src/components/logo';
import Menu from '../src/components/menu';
import Language from '../src/components/language';
import Footer from '../src/components/footer';

const Reel = ({ reels }) => (
    <div>
        <Head>
            <title>Janice d'Avila - Cinematographer</title>
        </Head>
        <section>
            <header className="header">
                <div className="container">
                    <Logo />
                    <div className="nav -wrapper">
                        <Menu language="en" />
                        <Language pt="/pt/reel" en="/reel" active="en" />
                    </div>
                </div>
            </header>
            <main className="reel-detail container">
                <h2 className="title">Reel</h2>
                <section className="reel">
                    {reels
                    .sort((a, b) => a.order_by - b.order_by)
                    .map((reel) => (
                        <article className="player" key={reel.id}>
                            <h3 className="category">{reel.category}</h3>
                            <Vimeo
                                video={reel.vimeo_id}
                                width={860}
                                showByline={false}
                                showTitle={false}
                                showPortrait={false}
                            />
                        </article>
                    ))}
                </section>
            </main>
            <Footer />
        </section>
    </div>
);

Reel.getInitialProps = async () => {
    const response = await axios.get(
        `${process.env.API_URL}/reel`
    );
    console.log(response);
    return { reels: response.data }
}

export default withAnalytics()(Reel);
