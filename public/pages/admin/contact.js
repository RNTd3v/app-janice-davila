import React from 'react';
import Router from 'next/router'
import "../../src/styles/main.scss";
import withAuth from  '../../src/hocs/withAuth';

import ContactService from '../../src/services/ContactService';
const contact = new ContactService();

import Logo from '../../src/components/logo';
import Footer from '../../src/components/footer';

class AdminContact extends React.Component {
    constructor() {
        super();
        this.handleSubmitPhone = this.handleSubmitPhone.bind(this);
        this.handleSubmitEmail = this.handleSubmitEmail.bind(this);
        this.state = {
            aboutId: 1,
            phones: [],
            emails: [],
            phone: "",
            email: "",
            phoneName: "",
            emailName: ""
        }
    }


    handleInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    componentDidMount() {
        contact.getPhone().then(res =>  {
            console.log(res);
            this.setState({phones: res});
        })

        contact.getEmail().then(res =>  {
            console.log(res);
            this.setState({emails: res});
        })
    }

    handleSubmitPhone(e) {
        e.preventDefault();
        const { 
            phone, 
            phoneName, 
            aboutId
        } = this.state;

        const data = {
            name: phoneName, 
            number: phone, 
            about_id: aboutId
        }

        contact.savePhone(data).then(res => {
            this.setState({
                phones: [...this.state.phones, res]
            })
        })
    }

    deletePhone(phoneId, index) {
        contact.deletePhone(phoneId).then(res => {
            const { phones } = this.state;
            this.setState({
                phones: [...phones.slice(0, index), ...phones.slice(index+1)]
            })
        })
    }

    handleSubmitEmail(e) {
        e.preventDefault();
        const { 
            email, 
            emailName, 
            aboutId
        } = this.state;

        const data = {
            name: emailName, 
            email: email, 
            about_id: aboutId
        }

        contact.saveEmail(data).then(res => {
            this.setState({
                emails: [...this.state.emails, res]
            })
        })
    }

    deleteEmail(emailId, index) {
        contact.deleteEmail(emailId).then(res => {
            const { emails } = this.state;
            this.setState({
                emails: [...emails.slice(0, index), ...emails.slice(index+1)]
            })
        })
    }

    done() {
        Router.push(`/admin`)
    }

    render () {
        const { phones, emails } = this.state;
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
                    <h2 className="title">Contact > Phone</h2>
                    <form className="form -grid -contact" onSubmit={this.handleSubmitPhone}>
                        <div className="col -three">
                            <small>Name</small>
                            <input type="text" id="namePhone" name="namePhone" className="input" 
                                value={this.state.phoneName} placeholder="Name" onChange={(event) => this.setState({phoneName: event.target.value})} />
                        </div>
                        <div className="col -three">
                            <small>Number</small>
                            <input type="text" id="phone" name="phone" className="input" 
                                value={this.state.phone} placeholder="Phone" onChange={(event) => this.setState({phone: event.target.value})} />
                        </div>
                        <div className="col -three">
                            <button className="button -right" >Add Phone</button>
                        </div>
                    </form>
                    <h2 className="title">Contact > E-mail</h2>
                    <form className="form -grid -contact" onSubmit={this.handleSubmitEmail}>
                        <div className="col -three">
                            <small>Name</small>
                            <input type="text" id="nameEmail" name="nameEmail" className="input" 
                                value={this.state.emailName} placeholder="Name" onChange={(event) => this.setState({emailName: event.target.value})} />
                        </div>
                        <div className="col -three">
                            <small>Email</small>
                            <input type="text" id="email" name="email" className="input" 
                                value={this.state.email} placeholder="Email" onChange={(event) => this.setState({email: event.target.value})} />
                        </div>
                        <div className="col -three">
                            <button className="button -right" >Add Email</button>
                        </div>
                    </form>
                    <div className="list-contact">
                        <div className="phones">
                            <h3>Phones</h3>
                            <section className="list">
                                { 
                                    phones.length === 0 
                                    ? 'No phone registered' 
                                    : 
                                    phones.map((phone, index) => (
                                        <article className="phone" key={phone.id}>
                                            <h3>{phone.name}</h3>
                                            <p>{phone.number}</p>
                                            <button className="button -small" onClick={() => this.deletePhone(phone.id, index)}>Excluir Phone</button>
                                        </article>
                                    ))
                                }
                            </section>
                        </div>
                        <div className="emails">
                            <h3>Emails</h3>
                            <section className="list">
                                { 
                                    emails.length === 0 
                                    ? 'No email registered' 
                                    : 
                                    emails.map((email, index) => (
                                        <article className="email" key={email.id}>
                                            <h3>{email.name}</h3>
                                            <p>{email.email}</p>
                                            <button className="button -small" onClick={() => this.deleteEmail(email.id, index)}>Excluir Email</button>
                                        </article>
                                    ))
                                }
                            </section>
                        </div>
                    </div>
                    <button className="button -center" onClick={() => this.done()}>Finalizar</button>
                </main>
                <Footer />
            </section>
        );
    }
}

export default withAuth(AdminContact);