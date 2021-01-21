import React from 'react';
import Router from 'next/router'
import "../../src/styles/main.scss";
import withAuth from  '../../src/hocs/withAuth';

import Vimeo from '@u-wave/react-vimeo';

import CategoriesService from '../../src/services/Categories';
const categories = new CategoriesService();

import Logo from '../../src/components/logo';
import Footer from '../../src/components/footer';

import FormErrors from '../../src/utils/FormErrors';

class AdminVideo extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            filmId: Router.query.idFilm,
            category: "",
            titleFilm: "",
            category_id: "",
            videos: [],
            film: {},
            title: "",
            title_pt: "",
            vimed_id: "",
            titleValid: false,
            titlePtValid: false,
            vimeoValid: false,
            formErrors: {title: '', titulo: '', vimeo: ''}
        }
    }


    handleInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    componentDidMount() {
        categories.getFilmById(Router.query.idFilm).then(res =>  {
            this.setState({
                film: res,
                category: res.category.name,
                category_id: res.category_id,
                titleFilm: res.title,
                videos: res.videos
            });
        })
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let titleValid = this.state.titleValid;
        let titlePtValid = this.state.titlePtValid;
        let vimeoValid = this.state.vimeoValid;

        switch(fieldName) {
          case 'title':
            titleValid = value.length >= 3;
            fieldValidationErrors.title = titleValid ? '' : ' is too short';
            break;
          case 'title_pt':
            titlePtValid = value.length >= 3;
            fieldValidationErrors.titulo = titlePtValid ? '': ' é muito curto';
            break;
          case 'vimeo_id':
            vimeoValid = value.length >= 5;
            fieldValidationErrors.vimeo = vimeoValid ? '': ': id error';
            break;
          default:
            break;
        }
        this.setState({
            formErrors:
                fieldValidationErrors,
                titleValid,
                titlePtValid,
                vimeoValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.titleValid && this.state.titlePtValid && this.state.vimeoValid});
    }

    handleSubmit(e) {
        e.preventDefault();
        const {
            title,
            title_pt,
            vimeo_id,
            filmId
        } = this.state;

        const data = {
            title,
            title_pt,
            vimeo_id,
            film_id: filmId
        }

        categories.saveVideo(data).then(res => {
            this.setState({
                videos: [...this.state.videos, res.data]
            })
        })
    }

    deleteVideo(videoId, index) {
        categories.deleteVideo(videoId).then(res => {
            const videos = this.state.videos;
            this.setState({
                videos: [...videos.slice(0, index), ...videos.slice(index+1)]
            })
        })
    }

    done() {
        Router.push(`/admin`)
    }

    render () {
        const { filmId, category, category_id, titleFilm, videos } = this.state;
        return (
            <section className="admin">
                <header className="header">
                    <div className="arrow-back action" onClick={() => Router.push(`/admin/${category_id}/${category}/film/${filmId}`)}>
                        <i className="fas fa-arrow-left icon"></i>
                        <small className="text">Back</small>
                    </div>
                    <Logo />
                </header>
                <main className="main">
                    <h2 className="title">{category} <strong>{titleFilm}</strong></h2>
                    <form className="form -grid -video" onSubmit={this.handleSubmit}>
                        <div className="col -four">
                            <small>English</small>
                            <input type="text" id="title" name="title" className="input"
                                value={this.state.title} placeholder="Title*" onChange={(event) => this.handleInput(event)} />
                        </div>
                        <div className="col -four">
                            <small>Portuguese</small>
                            <input type="text" id="titulo" name="title_pt" className="input"
                                value={this.state.title_pt} placeholder="Título*" onChange={(event) => this.handleInput(event)} />
                        </div>
                        <div className="col -four">
                            <small>Vimeo Code</small>
                            <input type="number" id="vimeo" name="vimeo_id" className="input"
                                value={this.state.vimeo_id} placeholder="VimeoID*" onChange={(event) => this.handleInput(event)} />
                        </div>
                        <div className="col -four">
                            <button className={`button -right ${!this.state.formValid ? '-disabled' : ''}`} disabled={!this.state.formValid} >Add Video</button>
                        </div>
                    </form>
                    <FormErrors formErrors={this.state.formErrors} />
                    <div className="videos">
                        <h3>Videos</h3>
                        <section className="list">
                            {
                                videos.length === 0
                                ? 'No video registered'
                                :
                                videos.map((video, index) => (
                                    <article className="player" key={video.id}>
                                        <Vimeo
                                            video={video.vimeo_id}
                                            width={480}
                                            showByline={false}
                                            showTitle={false}
                                            showPortrait={false}
                                        />
                                        <button className="button -small" onClick={() => this.deleteVideo(video.id, index)}>Excluir vídeo</button>
                                    </article>
                                ))
                            }

                        </section>
                        <button className="button -center" onClick={() => this.done()}>Finalizar</button>
                    </div>
                </main>
                <Footer />
            </section>
        );
    }
}

export default withAuth(AdminVideo);
