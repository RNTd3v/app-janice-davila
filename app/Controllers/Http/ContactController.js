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
    console.log(data);

    await Mail.send('emails.contact', (message) => {
      message
        .to('rntd3signer@gmail.com')
        .from('janicedavila.master@gmail.com')
        .subject(`${data.contact.subject}`)
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
