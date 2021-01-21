import React from 'react';
import Router from 'next/router';
import withAuth from  '../../src/hocs/withAuth';

import "../../src/styles/main.scss";

import ReelService from '../../src/services/Reel';
const reel = new ReelService();

import Logo from '../../src/components/logo';
import Footer from '../../src/components/footer';

import FormErrors from '../../src/utils/FormErrors';
import Vimeo from '@u-wave/react-vimeo';

class AdminReel extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            order_by: 0,
            category: "",
            category_pt: "",
            vimeo_id: "",
            categoryValid: false,
            categoryPtValid: false,
            vimeoValid: false,
            update: false,
            formErrors: {category: '', categoria: '', vimeo: ''},
            reelId: Router.query.idReel
        }
    }

    handleInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    componentDidMount() {
        Router.query.idReel ?
        reel.getReelById(Router.query.idReel).then(res =>  {
            this.setState({
              category: res.category,
              category_pt: res.category_pt,
              vimeo_id: res.vimeo_id,
              order_by: res.order_by,
              categoryValid: true,
              categoryPtValid: true,
              vimeoValid: true,
              update: true
            });
            this.setState({formValid: this.state.categoryValid && this.state.categoryPtValid && this.state.vimeoValid});
        })
        : null

    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let categoryValid = this.state.categoryValid;
        let categoryPtValid = this.state.categoryPtValid;
        let vimeoValid = this.state.vimeoValid;

        switch(fieldName) {
          case 'category':
            categoryValid = value.length >= 3;
            fieldValidationErrors.category = categoryValid ? '' : ' is too short';
            break;
          case 'category_pt':
            categoryPtValid = value.length >= 3;
            fieldValidationErrors.categoria = categoryPtValid ? '': ' é muito curto';
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
                categoryValid,
                categoryPtValid,
                vimeoValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.categoryValid && this.state.categoryPtValid && this.state.vimeoValid});
    }

    async handleSubmit(e) {
        e.preventDefault();
        const {
          category,
          category_pt,
          vimeo_id,
          order_by,
          update,
          reelId
        } = this.state;

        const data = {
          category,
          category_pt,
          vimeo_id,
          order_by
        }

        update
        ? await reel.updateReel(data, reelId)
        : await reel.saveReel(data)

        Router.push(`/admin/reels`);
    }

    render () {
      const { vimeo_id, vimeoValid } = this.state;
        return (
            <section className="admin">
                <header className="header">
                    <div className="arrow-back action" onClick={() => Router.push(`/admin/reels`)}>
                        <i className="fas fa-arrow-left icon"></i>
                        <small className="text">Back</small>
                    </div>
                    <Logo />
                </header>
                <main className="main">
                    <h2 className="title">Reel</h2>
                    <form className="form ui-grid" onSubmit={this.handleSubmit}>
                        <div className="col">
                            <small>English</small>
                            <input type="text" id="category" name="category" className="input"
                                value={this.state.category} placeholder="Category*" onChange={(event) => this.handleInput(event)} />
                        </div>
                        <div className="col">
                            <small>Portuguese</small>
                            <input type="text" id="category_pt" name="category_pt" className="input"
                                value={this.state.category_pt} placeholder="Categoria*" onChange={(event) => this.handleInput(event)} />
                        </div>
                        <div className="col">
                            <small>Order</small>
                            <input type="text" id="order" name="order_by" className="input"
                                value={this.state.order_by} placeholder="Order*" onChange={(event) => this.handleInput(event)} />
                        </div>
                        <div className="col">
                            <small>Vimeo Code</small>
                            <input type="number" id="vimeo" name="vimeo_id" className="input"
                                value={this.state.vimeo_id} placeholder="VimeoID*" onChange={(event) => this.handleInput(event)} />
                            { vimeoValid
                              ? <Vimeo
                                  video={vimeo_id}
                                  width={480}
                                  showByline={false}
                                  showTitle={false}
                                  showPortrait={false}
                                />
                              : null
                            }
                        </div>

                        <button className={`button one-col -center ${!this.state.formValid ? '-disabled' : ''}`} disabled={!this.state.formValid} >Save</button>
                    </form>
                    <FormErrors formErrors={this.state.formErrors} />
                </main>
                <Footer />

            </section>
        );
    }
}

export default withAuth(AdminReel);
