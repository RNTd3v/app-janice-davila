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
                    <AnchorLink offset='220' href='#Documentary'>Documentary</AnchorLink>
                    <AnchorLink offset='220' href='#Series'>Series</AnchorLink>
                    <AnchorLink offset='220' href='#Commercial'>Commercial</AnchorLink>
                </div>
            </header>
            <main className="films container">
                {
                    categories.map(category => (
                        <section className="film narrative" id={category.name} key="category.id">
                        <h2 className="title">{category.name}</h2>
                            {
                                category.films.map(film => (
                                    <article className="item" key={film.id} >
                                        <img src={film.picture} className="picture" alt={film.title} />
                                            <span className="content" onClick={() => Router.push(`/detail/${film.id}`)}>
                                                <h3 className="title">{film.title}</h3>
                                                <p className="description">{film.description}</p>
                                                <small className="link">ver mais</small>
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

Films.getInitialProps = async () => {
    const response = await axios.get(
        `${process.env.API_URL}/category/films`
    );
    return { categories: response.data }
}

export default withAnalytics()(Films);