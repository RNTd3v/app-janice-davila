import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
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

const Films = ({ categories }) => (
    <div>
        <Head>
            <title>Janice D'Avila - Films</title>
        </Head>
        <section>
            <header className="header">
                <div className="container">
                    <Logo />
                    <div className="nav">
                        <Menu language="en" />
                        <Language pt="/filmes" en="/" active="en" />
                    </div>
                </div>
                <div className="show-mobile">
                    <AnchorLink offset='220' href='#sectionNarrative'>Narrative</AnchorLink>
                    <AnchorLink offset='220' href='#sectionCommercials'>Commercials</AnchorLink>
                    <AnchorLink offset='220' href='#sectionMusic'>Music Videos</AnchorLink>
                </div>
            </header>
            <main className="films container">
                <section className="film narrative" id="sectionNarrative">
                    <h2 className="title">Narrative</h2>
                    {
                            categories[0].films.map(film => (
                                <article className="item" key={film.id} onClick={() => Router.push(`/detail/${film.id}`)}>
                                    <img src={film.picture} className="picture" alt={film.title} />
                                    <span className="content">
                                        <h3 className="title">{film.title}</h3>
                                        <small className="link">see more</small>
                                    </span>
                                </article>
                            ))
                    }
                </section>
                <section className="film commercials" id="sectionCommercials">
                    <h2 className="title">Commercials</h2>
                    {
                        categories[1].films.map(film => (
                            <article className="item" key={film.id} onClick={() => Router.push(`/detail/${film.id}`)}>
                                <img src={film.picture} className="picture" alt={film.title} />
                                <span className="content">
                                    <h3 className="title">{film.title}</h3>
                                    <small className="link">see more</small>
                                </span>
                            </article>
                        ))
                    }
                </section>
                <section className="film music" id="sectionMusic">
                    <h2 className="title">Music Videos</h2>
                    {
                        categories[2].films.map(film => (
                            <article className="item" key={film.id} onClick={() => Router.push(`/detail/${film.id}`)}>
                                <img src={film.picture} className="picture" alt={film.title} />
                                <span className="content">
                                    <h3 className="title">{film.title}</h3>
                                    <small className="link">see more</small>
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

Films.getInitialProps = async () => {
    const response = await axios.get(
        `${process.env.API_URL}/category/films`
    );
    return { categories: response.data }
}

export default withAnalytics()(Films);