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
  async store ({ request, response }) {

    const data = request.all()
    await Contact.create(data)

    const email = `
      <h2> Novo Contato</h2>
      <p><strong>Nome:</strong> ${data.name}</p>
      <p><strong>Telefone:</strong> ${data.phone}</p>
      <p><strong>E-mail:</strong> ${data.email}</p>
      <p><strong>Mensagem:</strong> ${data.message}</p>
    `

    await Mail.raw(email, (message) => {
      message
        .to('<to-email>')
        .from('<from-email>')
        .subject(`${data.subject}`)
    })

    return 'Contato enviado com sucesso!'

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
    return 'Excluido com sucesso!';
  }
}

module.exports = ContactController
