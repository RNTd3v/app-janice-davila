import React from 'react';
import axios from 'axios';

import Head from 'next/head';
import withAnalytics from '../src/hocs/withAnalytics';
import MaskedInput from 'react-text-mask'

// Components
import Logo from '../src/components/logo';
import Menu from '../src/components/menu';
import Language from '../src/components/language';
import Footer from '../src/components/footer';

class Contact extends React.Component {
    constructor() {
        super();
        this.handleSubmit       = this.handleSubmit.bind(this);
        this.handleChange       = this.handleChange.bind(this);
        this.handleFormReset    = this.handleFormReset.bind(this);
        this.state = {
            response: null,
            name: '',
            email: '',
            phone: '',
            message: ''
        }
    }

    static async getInitialProps () {
        const response = await axios.get(
            `${process.env.API_URL}/about`
        );

        return { about: response.data[0] }
    }

    async handleSubmit(event) {
        event.preventDefault();
        // const data = new FormData(event.target);
        const {name, email, phone, message} = this.state;
        const contact = {
            name, email, phone, message,
            "subject": "Formulário de Contato"
        }

        const response = await axios.post(
            `${process.env.API_URL}/contact`, { contact }
        );
        this.handleFormReset();
        this.setState({
            response: response.data.response
        });
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleFormReset = () => {
        this.setState({
            name: '',
            email: '',
            phone: '',
            message: ''
        })
    }

    render () {
        return (
            <div>
                <Head>
                    <title>Janice d'Avila - Cinematographer</title>
                </Head>
                <section>
                    <header className="header">
                        <div className="container">
                            <Logo />
                            <div className="nav -wrapper">
                                <Menu language="en" />
                                <Language pt="/pt/contato" en="/contact" active="en" />
                            </div>
                        </div>
                    </header>
                    <main className="contact container">
                        <section className="info">
                            <h2 className="title">Contact</h2>
                            {
                                this.props.about.phone.map(phone => (
                                    <div className="item" key="{phone.id}">
                                        <i className="icon fas fa-phone-square"></i>
                                        <span className="text">{phone.number}</span>
                                    </div>
                                ))
                            }
                            {
                                this.props.about.email.map(email => (
                                    <div className="item" key="{email.id}">
                                        <i className="icon fas fa-envelope-square"></i>
                                        <a href={"mailto:" + email.email} className="text">{email.email}</a>
                                    </div>
                                ))
                            }
                        </section>
                        <section className="form">
                            <form className="form" onSubmit={this.handleSubmit} onReset={this.handleFormReset}>
                                <input type="text" id="name" name="name" className="input" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                                <input type="email" id="email" name="email" className="input" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                                <MaskedInput mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                id="phone" name="phone" className="input" placeholder="Phone" value={this.state.phone} onChange={this.handleChange} />
                                <textarea placeholder="Message" id="message" name="message" className="textarea" value={this.state.message} onChange={this.handleChange}></textarea>
                                <button className="button">Send</button>
                                <p className="message-response">{this.state.response}</p>
                            </form>
                        </section>
                    </main>
                    <Footer />
                </section>
            </div>
        );
    }
}

export default withAnalytics()(Contact);
