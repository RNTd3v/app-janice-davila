import React from 'react';
import Router from 'next/router'
import "../../src/styles/main.scss";
import withAuth from  '../../src/hocs/withAuth'

import CategoriesService from '../../src/services/Categories';
const categories = new CategoriesService();

import Logo from '../../src/components/logo';
import Footer from '../../src/components/footer';

class AdminFilms extends React.Component {
    constructor() {
        super();
        this.state = {
            category: "",
            categoryId: Router.query.id,
            films: [],
            changeTheOrder: false
        }
    }

    componentDidMount() {
        this.getFilms();
    }

    onDragStart = (e, index) => {
      this.draggedFilm = this.state.films[index];
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/html", e.target.parentNode);
      e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };

    onDragOver = index => {
      const draggedOverFilm = this.state.films[index];

      // if the item is dragged over itself, ignore
      if (this.draggedFilm === draggedOverFilm) {
        return;
      }

      // filter out the currently dragged item
      let films = this.state.films.filter(film => film !== this.draggedFilm);

      // add the dragged item after the dragged over item
      films.splice(index, 0, this.draggedFilm);

      this.setState({ films, changeTheOrder: true });
    };

    onDragEnd = () => {
      this.draggedIdx = null;
    };

    getFilms() {
        categories.getFilmsByCategoryId(Router.query.id).then(res =>  {
          const films = res.films.sort((a, b) => a.order_by - b.order_by);
          this.setState({films});
          this.setState({category: res.category});
        });
    }

    deleteFilm(idFilm) {
        categories.deleteFilm(idFilm).then(() =>  {
            this.getFilms();
        });
    }

    saveOrderFilm() {
      this.setState({ changeTheOrder: false });
      this.state.films.forEach((film, index) => {
        categories.changeOrderFilm({order_by: index}, film.id)
        .then()
        .catch(err => console.error(err));
      })
    }

    render () {
        const { films, category, categoryId } = this.state;
        return (
            <section className="admin">
                <header className="header">
                    <div className="arrow-back action" onClick={() => Router.push(`/admin/category/`)}>
                        <i className="fas fa-arrow-left icon"></i>
                        <small className="text">Back</small>
                    </div>
                    <Logo />
                    <div className="arrow-back action" onClick={() => Router.push(`/admin/${categoryId}/${category}/film `)}>
                        <i className="far fa-plus-square icon"></i>
                        <small className="text">Add</small>
                    </div>
                </header>
                <main className="main">
                    <h2 className="title">{category}</h2>
                    <ul className="table">
                        <li className="row -head">
                            <div className="col -img">
                                Image
                            </div>
                            <div className="col -flex">
                                Title
                            </div>
                            <div className="col -act">
                                Action
                            </div>
                        </li>
                        {
                            films
                              .map((film, idx) => (
                                <li className="row" key={film.id} onDragOver={() => this.onDragOver(idx)}>
                                    <i className="fas fa-bars icon" draggable
                                      onDragStart={e => this.onDragStart(e, idx)}
                                      onDragEnd={this.onDragEnd}></i>
                                    <div className="col -img">
                                        <img src={film.picture} className="picture" />
                                    </div>
                                    <div className="col -flex">
                                        {film.title}
                                    </div>
                                    <div className="col -act">
                                        <div className="icon -editar action" onClick={() => Router.push(`/admin/${categoryId}/${category}/film/${film.id}`)}>
                                            <i className="far fa-edit icon"></i>
                                            <small className="text">Edit</small>
                                        </div>
                                        <div className="icon -delete  action" onClick={() => this.deleteFilm(film.id)}>
                                            <i className="fas fa-eraser icon"></i>
                                            <small className="text">Delete</small>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <button className={`button -center ${!this.state.changeTheOrder ? '-disabled' : ''}`} disabled={!this.state.changeTheOrder} onClick={() => this.saveOrderFilm()}>Save the order</button>
                </main>
                <Footer />
            </section>
        );
    }
}

export default withAuth(AdminFilms);
