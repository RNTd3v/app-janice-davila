import React from 'react';
import Router from 'next/router'
import "../../src/styles/main.scss";
import withAuth from  '../../src/hocs/withAuth'

import CategoriesService from '../../src/services/Categories';
const categories = new CategoriesService();

import Logo from '../../src/components/logo';
import Footer from '../../src/components/footer';

import FormErrors from '../../src/utils/FormErrors';

class AdminFilm extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            category: Router.query.category,
            title: "",
            title_pt: "",
            description: "",
            description_pt: "",
            picture: "",
            is_active: true,
            category_id: Router.query.id,
            film: {},
            titleValid: false,
            titlePtValid: false,
            pictureValid: false,
            formErrors: {title: '', titulo: '', picture: ''},
        }
    }

    handleChange(file)
    {
        const category = this.state.category.toLowerCase();
        const title = this.state.title.toLowerCase().replace(/[\s-]/g,'-') || 'film';
        const data = new FormData();
        data.append('picture', file[0]);
        data.append('title', title);
        data.append('category', category);

        categories.uploadPicture(data).then(res => {
            this.setState({
                picture: res.data
            });
            this.validateField('picture', res.data);
        })
    }

    handleInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
            () => { this.validateField(name, value) });
    }

    componentDidMount() {
        Router.query.idFilm ?
        categories.getFilmById(Router.query.idFilm).then(res =>  {
            this.setState({
                title: res.title,
                title_pt: res.title_pt,
                description: res.description,
                description_pt: res.description_pt,
                picture: res.picture,
                is_active: res.is_active,
                titleValid: true,
                titlePtValid: true,
                pictureValid: true
            });
            this.setState({formValid: this.state.titleValid && this.state.titlePtValid && this.state.pictureValid});
        })
        : null
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let titleValid = this.state.titleValid;
        let titlePtValid = this.state.titlePtValid;
        let pictureValid = this.state.pictureValid;
      
        switch(fieldName) {
          case 'title':
            titleValid = value.length >= 3;
            fieldValidationErrors.title = titleValid ? '' : ' is too short';
            break;
          case 'title_pt':
            titlePtValid = value.length >= 3;
            fieldValidationErrors.titulo = titlePtValid ? '': ' é muito curto';
            break;
          case 'picture':
            pictureValid = value.length >= 3;
            fieldValidationErrors.picture = pictureValid ? '': ': select an image';
            break;
          default:
            break;
        }
        this.setState({
            formErrors: 
                fieldValidationErrors,
                titleValid,
                titlePtValid,
                pictureValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.titleValid && this.state.titlePtValid && this.state.pictureValid});
    }

    render () {
        const { category, category_id } = this.state;
        return (
            <section className="admin">
                <header className="header">
                    <div className="arrow-back action" onClick={() => Router.push(`/admin/${category_id}/films/`)}>
                        <i className="fas fa-arrow-left icon"></i>
                        <small className="text">Back</small>
                    </div>
                    <Logo />
                </header>
                <main className="main">
                    <h2 className="title">{category}</h2>
                    <form className="form -grid" onSubmit={this.handleSubmit}>
                        <div className="col">
                            <small>English</small>
                            <input type="text" id="title" name="title" className="input" 
                                value={this.state.title} placeholder="Title*" onChange={(event) => this.handleInput(event)} />
                            <textarea placeholder="Description" id="description" name="description" 
                                value={this.state.description} className="textarea" onChange={(event) => this.handleInput(event)}></textarea>
                        </div>
                        <div className="col">
                            <small>Portuguese</small>
                            <input type="text" id="titulo" name="title_pt" className="input" 
                                value={this.state.title_pt} placeholder="Título*" onChange={(event) => this.handleInput(event)} />
                            <textarea placeholder="Descrição" id="descricao" name="description_pt" 
                                value={this.state.description_pt} className="textarea" onChange={(event) => this.handleInput(event)}></textarea>
                        </div>
                        <div className="picture">
                            <label className="label">Picture*</label>
                            <input type="file" id="picture" name="picture" className="input" placeholder="Picture" onChange={ (e) => this.handleChange(e.target.files) }/>
                            {
                                this.state.picture ? <img src={this.state.picture} /> : null
                            }
                            <small className="required">*Required items</small>
                        </div>
                        <button className={`button -center ${!this.state.formValid ? '-disabled' : ''}`} disabled={!this.state.formValid} >Save and Continue</button>
                    </form>
                    <FormErrors formErrors={this.state.formErrors} />
                </main>
                <Footer />
            </section>
        );
    }
}

export default withAuth(AdminFilm);