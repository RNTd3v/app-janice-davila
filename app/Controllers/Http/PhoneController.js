'use strict'
const Phone = use('App/Models/Phone');

/**
 * Resourceful controller for interacting with phones
 */
class PhoneController {
  /**
   * Show a list of all phones.
   * GET phones
   */
  async index () {
    return await Phone.all();
  }

  
  /**
   * Create/save a new phone.
   * POST phones
   */
  async store ({ request }) {
    const data = request.all();
    const phone = await Phone.create(data);
    return phone;
  }

  /**
   * Display a single phone.
   * GET phones/:id
   */
  async show ({ params }) {
    return await Phone.find(params.id);
  }

   /**
   * Update phone details.
   * PUT or PATCH phones/:id
   */
  async update ({ params, request }) {
    const data = request.all();
    const phone = await Phone.find(params.id);

    phone.merge(data);
    await phone.save();

    return phone;
  }

  /**
   * Delete a phone with id.
   * DELETE phones/:id
   */
  async destroy ({ params }) {
    const phone = await Phone.find(params.id);
    await phone.delete();
    return {message: 'Phone deleted'};
  }
}

module.exports = PhoneController
