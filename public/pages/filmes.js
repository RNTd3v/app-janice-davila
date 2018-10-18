import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import axios from 'axios';
import "../src/styles/main.scss";

import Head from 'next/head';
import Router from 'next/router'

import withAnalytics from '../src/hocs/withAnalytics';

// Components
import Logo from '../src/components/logo';
import Menu from '../src/components/menu';
import Language from '../src/components/language';
import Footer from '../src/components/footer';

const Filmes = ({ categories }) => (
    <div>
        <Head>
            <title>Janice D'Avila - Filmes</title>
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
                    <AnchorLink offset='220' href='#sectionNarrative'>Narrativa</AnchorLink>
                    <AnchorLink offset='220' href='#sectionCommercials'>Comerciais</AnchorLink>
                    <AnchorLink offset='220' href='#sectionMusic'>Video Clips</AnchorLink>
                </div>
            </header>
            <main className="films container">
                <section className="film narrative" id="sectionNarrative">
                    <h2 className="title">Narrativa</h2>
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnter={false}
                        transitionLeave={false}
                    >
                        {
                            categories[0].films.map(film => (
                                <article className="item" key={film.id} onClick={() => Router.push(`/detalhe/${film.id}`)}>
                                    <img src={film.picture} className="picture" alt={film.title_pt} />
                                    <span className="content">
                                        <h3 className="title">{film.title_pt}</h3>
                                        <small className="link">ver mais</small>
                                    </span>
                                </article>
                            ))
                        }
                    </ReactCSSTransitionGroup>
                </section>
                <section className="film commercials" id="sectionCommercials">
                    <h2 className="title">Comerciais</h2>
                    {
                        categories[1].films.map(film => (
                            <article className="item" key={film.id} onClick={() => Router.push(`/detalhe/${film.id}`)}>
                                <img src={film.picture} className="picture" alt={film.title_pt} />
                                <span className="content">
                                    <h3 className="title">{film.title_pt}</h3>
                                    <small className="link">ver mais</small>
                                </span>
                            </article>
                        ))
                    }
                </section>
                <section className="film music" id="sectionMusic">
                    <h2 className="title">Video Clips</h2>
                    {
                        categories[2].films.map(film => (
                            <article className="item" key={film.id} onClick={() => Router.push(`/detalhe/${film.id}`)}>
                                <img src={film.picture} className="picture" alt={film.title_pt} />
                                <span className="content">
                                    <h3 className="title">{film.title_pt}</h3>
                                    <small className="link">ver mais</small>
                                </span>
                            </article>
                        ))
                    }
                </section>
               
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