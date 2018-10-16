import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
import axios from 'axios';

import "../src/styles/main.scss";

import Head from 'next/head';
import withAnalytics from '../src/hocs/withAnalytics';

// Components
import Logo from '../src/components/logo';
import Menu from '../src/components/menu';
import Footer from '../src/components/footer';

const videos = [
    { id: 115783408, name: 'Jambinai - Connection' },
    { id: 169408731, name: 'Hoody - Like You' },
];

const Detail = ({ film }) => (
    <div>
        <Head>
            <title>Janice D'Avila - {film.title}</title>
            <meta name="description" content={film.description} />
            <meta property="og:image" content={film.picture} />
            <meta property="og:description" content={film.description} />
            <meta property="og:title" content={film.title} />
        </Head>
        <section>
            <header>
                <div className="container">
                    <Logo />
                    <Menu language="en" />
                </div>
            </header>
            <main className="film-detail container">
                <section className="videos">
                    {film.videos.map((video) => (
                        <article className="player">
                            <Vimeo
                                video={video.vimeo_id}
                                width={860}
                                showByline={false}
                                showTitle={false}
                                showPortrait={false}
                            />
                        </article>
                    ))}
                </section>
                <section className="content">
                    <small className="category">
                        {film.category.name}
                    </small>
                    <h1 className="title">
                        {film.title}
                    </h1>
                    <p className="description">
                        {film.description}
                    </p>
                </section>
            </main>
            <Footer />
        </section>
    </div>
);

Detail.getInitialProps = async ({ query }) => {
    const response = await axios.get(
        `${process.env.API_URL}/film/${query.id}`
    );
    return { film: response.data }
}

export default withAnalytics()(Detail);

// https://github.com/u-wave/react-vimeo