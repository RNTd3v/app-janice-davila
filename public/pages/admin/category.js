import React from 'react';
import Router from 'next/router'
import "../../src/styles/main.scss";
import withAuth from  '../../src/hocs/withAuth'

import CategoriesService from '../../src/services/Categories';
const categories = new CategoriesService();

import Logo from '../../src/components/logo';
import Footer from '../../src/components/footer';

class AdminCategory extends React.Component {
    constructor() {
        super();
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        categories.getCategories().then(res =>  {
            this.setState({
                categories: res
              });
        });
    }

    render () {
        const { categories } = this.state;
        return (
            <section className="admin">
                <header className="header">
                    <div className="arrow-back action" onClick={() => Router.push(`/admin`)}>
                        <i className="fas fa-arrow-left icon"></i>
                        <small className="text">Back</small>
                    </div>
                    <Logo />
                </header>
                <main className="main">
                <div className="list">
                    <p className="info">Selecione uma categoria:</p>
                    {
                        categories.map(category => (
                            <article className="item" key={category.id} onClick={() => Router.push(`/admin/${category.id}/films/`)}>
                                <h2 className="title">{category.name}</h2>
                            </article>
                        ))
                    }
                </div>
                </main>
                <Footer />
            </section>
        );
    }
}

export default withAuth(AdminCategory);