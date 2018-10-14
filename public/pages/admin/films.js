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
            films: []
        }
    }

    componentDidMount() {
        categories.getFilmsByCategoryId(Router.query.id).then(res =>  {
            this.setState({films: res.films});
            this.setState({category: res.category});
        });
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
                    <div className="table">
                        <div className="row -head">
                            <div className="col -img">
                                Image
                            </div>
                            <div className="col -flex">
                                Title
                            </div>
                            <div className="col -act">
                                Action
                            </div>
                        </div>
                        {
                            films.map(film => (
                                <div className="row" key={film.id}>
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
                                        <div className="icon -delete  action">
                                            <i className="fas fa-eraser icon"></i>
                                            <small className="text">Delete</small>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </main>
                <Footer />
            </section>
        );
    }
}

export default withAuth(AdminFilms);