import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { isMobile, isBrowser } from "react-device-detect";
import axios from 'axios';

import Head from 'next/head';

import withAnalytics from '../../src/hocs/withAnalytics';

// Components
import Logo from '../../src/components/logo';
import Menu from '../../src/components/menu';
import Language from '../../src/components/language';
import ModalVimeo from '../../src/components/modal-vimeo';
import Footer from '../../src/components/footer';
class Filmes extends React.Component {

  constructor() {
    super();
    this.state = {
      categories: [],
      showModalVimeo: false,
      selectedFilm: {}
    }

    this.hideModalVimeo = this.hideModalVimeo.bind(this);
  }

  componentDidMount() {
    this.getFilms();
  }

  async getFilms() {
    const { data } = await axios.get(
      `${process.env.API_URL}/category/films/videos`
    );
    this.setState({ categories: data });
  }

  selectVideo(film) {
    const selectedFilm = {
      ...film,
      vimeo_id: film.videos[0].vimeo_id
    }
    this.setState({ selectedFilm, showModalVimeo: true });
  }

  hideModalVimeo() {
    this.setState({ selectedFilm: null, showModalVimeo: false });
  }

  handleLazyLoadingImage(index) {
    if (isBrowser && index < 3) {
      return 'eager'
    }
    return 'lazy';
  }

  render() {
    const { categories, showModalVimeo } = this.state;
    return (
      <div>
        <Head>
          <html lang="en-US" />
          <title>Janice d'Avila - Cinematographer</title>
        </Head>
        <section>
          <header className="header">
            <div className="container">
              <Logo />
              <div className="nav -wrapper">
                <Menu language="pt" />
                <Language pt="/pt/filmes" en="/" active="pt" />
              </div>
            </div>
            <div className="show-mobile">
              <AnchorLink offset='220' href='#Documentary'>Documentário</AnchorLink>
              <AnchorLink offset='220' href='#Narrative'>Narrativa</AnchorLink>
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
                      .map((film, index) => (
                        <article className={'item ' + (isMobile ? '-mobile' : '')} key={film.id} onClick={() => this.selectVideo(film)}>
                          <img src={film.picture} className="picture" alt={film.title} loading={this.handleLazyLoadingImage(index)} />
                          <span className="content">
                            <h3 className="title">{film.title}</h3>
                            <p className="description">{film.description}</p>
                            <i className="fas fa-play-circle player"></i>
                          </span>
                        </article>
                      ))
                  }
                </section>
              ))
            }
            {
              showModalVimeo
                ? <div className="modal-container">
                  <ModalVimeo film={this.state.selectedFilm} hideModalVimeo={this.hideModalVimeo} />
                </div>
                : null
            }
          </main>
          <Footer />
        </section>

      </div>
    );
  }
}

export default withAnalytics()(Filmes);
