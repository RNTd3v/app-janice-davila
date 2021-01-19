import React from 'react'
import Vimeo from '@u-wave/react-vimeo';
import Player from '@vimeo/player';

import { isMobile } from "react-device-detect";

import Loading from './loading';

class ModalVimeo extends React.Component {

  constructor() {
    super();
    this.state = { isLoading: true }
  }

  async componentDidMount() {

    const { film } = this.props;

    const options = {
      id: film.vimeo_id,
      title: false,
      byline: false,
      playsinline: false,
      portrait: false,
      badge: false
    }

    const player = new Player('playerModalVimeo', options);

    await player.ready();

    this.setState({ isLoading: false });

    if (isMobile) {
      await player.requestFullscreen();
    }

    player.play();

  }

  render() {
    const { film, language = 'en' } = this.props;
    return (
      <main className="modal -vimeo">
        <section className="content">
          <h1 className="title">{ language === 'en' ? film.title : film.title_pt }</h1>
          <p className="description">{ language === 'en' ? film.description : film.description_pt }</p>
          <button className="button" onClick={this.props.hideModalVimeo}>X</button>
        </section>
        <section className="video">
          <article className="player" id="player">
            {/* <Vimeo
              video={film.vimeo_id}
              width={860}
              showByline={false}
              showTitle={false}
              showPortrait={false}
              autoplay={true}
            /> */}
            {this.state.isLoading ? <Loading /> : null }
            <div id="playerModalVimeo"></div>
            {/* <iframe src={`https://player.vimeo.com/video/${film.vimeo_id}?title=0&byline=0&playsinline=0&portrait=0&badge=0&autoplay=1`} width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe> */}
          </article>
        </section>
      </main>
    );
  }
}

export default ModalVimeo
