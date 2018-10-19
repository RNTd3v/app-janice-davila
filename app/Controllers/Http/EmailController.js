'use strict'
const Email = use('App/Models/Email');

/**
 * Resourceful controller for interacting with emails
 */
class EmailController {
  /**
   * Show a list of all emails.
   * GET emails
   */
  async index () {
    return await Email.all();
  }

  
  /**
   * Create/save a new email.
   * POST emails
   */
  async store ({ request }) {

    const data = request.all();
    const email = await Email.create(data);
    return email;
  
  }

  /**
   * Display a single email.
   * GET emails/:id
   */
  async show ({ params }) {
    return await Email.find(params.id);
  }

  
  /**
   * Update email details.
   * PUT or PATCH emails/:id
   */
  async update ({ params, request }) {

    const data = request.all();
    const email = await Email.find(params.id);

    email.merge(data);
    await email.save();

    return email;
  }

  /**
   * Delete a email with id.
   * DELETE emails/:id
   */
  async destroy ({ params }) {

    const email = await Email.find(params.id);
    await email.delete();
    return {message: 'Email deleted'};
  }
}

module.exports = EmailController
