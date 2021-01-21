import React from 'react';
import Vimeo from '@u-wave/react-vimeo';
import axios from 'axios';

import Head from 'next/head';
import withAnalytics from '../../src/hocs/withAnalytics';

// Components
import Logo from '../../src/components/logo';
import Menu from '../../src/components/menu';
import Language from '../../src/components/language';
import Footer from '../../src/components/footer';

const Detalhe = ({ film }) => (
    <div>
        <Head>
            <title>Janice d'Avila - {film.title_pt}</title>
            <meta name="description" content={film.description_pt} />
            <meta property="og:image" content={film.picture} />
            <meta property="og:description" content={film.description_pt} />
            <meta property="og:title" content={film.title_pt} />
        </Head>
        <section>
            <header>
                <div className="container">
                    <Logo />
                    <div className="nav -wrapper">
                        <Menu language="pt" />
                        <Language pt={`/pt/detalhe/${film.id}`} en={`/detail/${film.id}`} active="pt" />
                    </div>
                </div>
            </header>
            <main className="film-detail container">
                <section className="videos">
                    {film.videos.map((video) => (
                        <article className="player" key={video.id}>
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
                        {film.category.name_pt}
                    </small>
                    <h1 className="title">
                        {film.title_pt}
                    </h1>
                    <p className="description">
                        {film.description_pt}
                    </p>
                </section>
            </main>
            <Footer />
        </section>
    </div>
);

Detalhe.getInitialProps = async ({ query }) => {
    const response = await axios.get(
        `${process.env.API_URL}/film/${query.id}`
    );
    return { film: response.data }
}

export default withAnalytics()(Detalhe);

// https://github.com/u-wave/react-vimeo
