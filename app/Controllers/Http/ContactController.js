'use strict'

const Mail = use('Mail');
const Contact = use('App/Models/Contact');

/**
 * Resourceful controller for interacting with contacts
 */
class ContactController {
  /**
   * Show a list of all contacts.
   * GET contacts
   */
  async index () {
    return await Contact.all();
  }


  /**
   * Create/save a new contact.
   * POST contacts
   */
  async store ({ request }) {
    const data = request.all()
    await Contact.create(data.contact)

    const contact = `
      <h2>Novo Contato</h2>
      <p><strong>Nome:</strong> ${data.contact.name}</p>
      <p><strong>Telefone:</strong> ${data.contact.phone}</p>
      <p><strong>E-mail:</strong> ${data.contact.email}</p>
      <p><strong>Mensagem:</strong> ${data.contact.message}</p>
    `

    await Mail.raw(contact, (message) => {
      message
        .to('janicedavila.master@gmail.com')
        .from('Janice Davila')
        .subject(`${data.contact.subject}`)
    })

    return {
      response: 'Contact sent successfully!',
      response_pt: 'Contato enviado com sucesso!'
    }

  }

  /**
   * Display a single contact.
   * GET contacts/:id
   */
  async show ({ params }) {
    return await Contact.find(params.id);
  }

  /**
   * Delete a contact with id.
   * DELETE contacts/:id
   */
  async destroy ({ params }) {
    await Contact.delete(params.id);
    return {message: 'Contato deletado com sucesso!'};
  }
}

module.exports = ContactController
