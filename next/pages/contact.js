import React from 'react';
import axios from 'axios';

import "../src/styles/main.scss";

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
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static async getInitialProps () {
        const response = await axios.get(
            `${process.env.API_URL}/about`
        );
        return { about: response.data[0] }
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const contact = {
            "name": data.get('name'),
            "email": data.get('email'),
            "phone": data.get('phone'),
            "subject": "Formulário de Contato",
            "message": data.get('message')
        }

        const response = await axios.post(
            `${process.env.API_URL}/contact`, { contact }
        );
        
        console.log(response);
    }

    render () {
        return (
            <div>
                <Head>
                    <title>Janice D'Avila - Contact</title>
                </Head>
                <section>
                    <header className="header">
                        <div className="container">
                            <Logo />
                            <div className="nav">
                                <Menu language="en" />
                                <Language pt="/contato" en="/contact" active="en" />
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
                            <form className="form" onSubmit={this.handleSubmit}>
                                <input type="text" id="name" name="name" className="input" placeholder="Name" />
                                <input type="email" id="email" name="email" className="input" placeholder="Email" />
                                <MaskedInput mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]} 
                                id="phone" name="phone" className="input" placeholder="Phone" />
                                <textarea placeholder="Message" id="message" name="message" className="textarea"></textarea>
                                <button className="button">Send</button>
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