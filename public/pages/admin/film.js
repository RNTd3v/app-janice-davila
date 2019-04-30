import React from 'react';
import Router from 'next/router';
import withAuth from  '../../src/hocs/withAuth';

import ReactCrop, { makeAspectCrop } from "react-image-crop";

import "../../src/styles/main.scss";

import CategoriesService from '../../src/services/Categories';
const categories = new CategoriesService();

import Logo from '../../src/components/logo';
import Footer from '../../src/components/footer';

import FormErrors from '../../src/utils/FormErrors';

class AdminFilm extends React.Component {
    constructor() {
        super();
        this.saveImage = this.saveImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            category: Router.query.category,
            order_by: 0,
            title: "",
            title_pt: "",
            description: "",
            description_pt: "",
            picture: "",
            is_active: true,
            category_id: Router.query.id,
            titleValid: false,
            titlePtValid: false,
            pictureValid: false,
            formErrors: {title: '', titulo: '', picture: ''},
            update: false,
            filmId: Router.query.idFilm,
            image: null,
            src: null,
            crop: {
                x: 5,
                y: 15,
                aspect: 16/9,
                width: 90,
            }
        }
    }

    saveImage()
    {
        const category = this.state.category.toLowerCase();
        const title = this.state.title.toLowerCase().replace(/[\s-]/g,'-') || 'film';
        const data = new FormData();
        data.append('picture', this.state.finalImage);
        data.append('title', title);
        data.append('category', category);

        categories.uploadPicture(data).then(res => {
            this.setState({
                picture: res.data
            });
            this.setState({src: null});
            this.validateField('picture', res.data);
        })
    }

    handleInput (e) {
      console.log(e.target.name);
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
                order_by: res.order_by,
                titleValid: true,
                titlePtValid: true,
                pictureValid: true,
                update: true
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

    handleSubmit(e) {
        e.preventDefault();
        const {
            title,
            title_pt,
            description,
            description_pt,
            is_active,
            picture,
            category_id,
            update,
            filmId,
            order_by,
            category
        } = this.state;

        const data = {
            title,
            title_pt,
            description,
            description_pt,
            is_active,
            picture,
            order_by,
            category_id
        }

        update
        ?
            categories.updateFilm(data, filmId).then(res => {
                Router.push(`/admin/${res.data.id}/videos`)
            })
        :
            categories.saveFilm(data).then(res => {
                Router.push(`/admin/${res.data.id}/videos`)
            })
    }

    nextStep() {
        // /admin/:id/:category/film/:idFilm/:film/videos
    }

    onSelectFile = e => {
        if (e && e.length > 0) {
          const reader = new FileReader();
          reader.addEventListener(
            "load",
            () => {
              this.setState({
                src: reader.result
              }),
            false
            }
          );
          reader.readAsDataURL(e[0]);
        }
    };

    onImageLoaded = async (image, pixelCrop) => {

        this.setState({ image: image.src });

        if (pixelCrop) {
          const finalImage = await this.getCroppedImg(
            image,
            pixelCrop,
            "newFile.jpeg"
          );
          this.setState({ finalImage });
        }

    };

    onCropComplete = async (crop, pixelCrop) => {
        console.log(this.state.image)
        const finalImage = await this.getCroppedImg(
          this.state.image,
          pixelCrop,
          "newFile.jpeg"
        );
        this.setState({ finalImage });
    };

    onCropChange = crop => {
        this.setState({ crop });
    };

    getCroppedImg(image, pixelCrop, fileName) {

        const canvas = document.createElement("canvas");
        canvas.width = pixelCrop.width;
        canvas.height = pixelCrop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
          image,
          pixelCrop.x,
          pixelCrop.y,
          pixelCrop.width,
          pixelCrop.height,
          0,
          0,
          pixelCrop.width,
          pixelCrop.height
        );

        // As a blob
        return new Promise((resolve, reject) => {
          canvas.toBlob(file => {
            file.name = fileName;
            resolve(file);
          }, "image/jpeg");
        });
    }

    render () {
        const { category, category_id, croppedImageUrl } = this.state;
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
                        <div className="order_by">
                            <small>Order</small>
                            <input type="number" min="0" id="orderBy" name="order_by" className="input"
                                value={this.state.order_by} placeholder="Order" onChange={(event) => this.handleInput(event)} />
                        </div>
                        <div className="picture">
                            <label className="label">Picture*</label>
                            <input
                                type="file"
                                id="picture"
                                name="picture"
                                className="input"
                                placeholder="Picture"
                                onChange={ (e) => this.onSelectFile(e.target.files) }
                            />

                            {this.state.src && (
                                <ReactCrop
                                    src={this.state.src}
                                    crop={this.state.crop}
                                    onImageLoaded={this.onImageLoaded}
                                    // onComplete={this.onCropComplete}
                                    onChange={this.onCropChange}
                                    keepSelection={true}
                                />
                            )}
                            {
                                this.state.src ?
                                    <div className="cropImage">
                                        {croppedImageUrl && <img alt="Crop" src={croppedImageUrl} />}
                                        <div className='button -small' onClick={this.saveImage}>Save image</div>
                                    </div>
                                    :
                                    <img src={this.state.picture} />
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
