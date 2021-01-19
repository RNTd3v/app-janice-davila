import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import axios from 'axios';
import "../../src/styles/main.scss";

import Head from 'next/head';
import Router from 'next/router'

import withAnalytics from '../../src/hocs/withAnalytics';

// Components
import Logo from '../../src/components/logo';
import Menu from '../../src/components/menu';
import Language from '../../src/components/language';
import Footer from '../../src/components/footer';

const Filmes = ({ categories }) => (
    <div>
        <Head>
            <title>Janice d'Avila - Cinematographer</title>
        </Head>
        <section>
            <header className="header">
                <div className="container">
                    <Logo />
                    <div className="nav">
                        <Menu language="pt" />
                        <Language pt="/filmes" en="/" active="pt" />
                    </div>
                </div>
                <div className="show-mobile">
                    <AnchorLink offset='220' href='#Documentary'>Documentário</AnchorLink>
                    <AnchorLink offset='220' href='#Series'>Series</AnchorLink>
                    <AnchorLink offset='220' href='#Commercial'>Comercial</AnchorLink>
                </div>
            </header>
            <main className="films container">
                        {
                            categories.map(category => (
                                <section className="film narrative" id={category.name}>
                                <h2 className="title">{category.name_pt}</h2>
                                    {
                                        category.films
                                        .sort((a, b) => a.order_by - b.order_by)
                                        .map(film => (
                                            <article className="item" key={film.id} >
                                                <img src={film.picture} className="picture" alt={film.title_pt} />
                                                <span className="content">
                                                    <h3 className="title">{film.title_pt}</h3>
                                                    <small className="link" onClick={() => Router.push(`/detalhe/${film.id}`)}>ver mais</small>
                                                </span>
                                            </article>
                                        ))
                                    }
                                </section>
                            ))
                        }
            </main>
            <Footer />
        </section>

    </div>
);

Filmes.getInitialProps = async () => {
    const response = await axios.get(
        `${process.env.API_URL}/category/films`
    );
    return { categories: response.data }
}

export default withAnalytics()(Filmes);
