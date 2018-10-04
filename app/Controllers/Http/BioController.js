'use strict'

const Bio = use('App/Models/Bio');

/**
 * Resourceful controller for interacting with bios
 */
class BioController {
  /**
   * Show a list of all bios.
   * GET bios
   */
  async index () {
    return await Bio.all();
  }

  
  /**
   * Create/save a new bio.
   * POST bios
   */
  async store ({ request, response }) {
    const data = request.all();
    const bio = await Bio.create(data);
    response.status(201).json({
      message: `Bio cadastrado com sucesso!`,
      data: bio
    });
  }

  /**
   * Display a single bio.
   * GET bios/:id
   */
  async show ({ params }) {
    return await Bio.find(params.id);
  }

  /**
   * Update bio details.
   * PUT or PATCH bios/:id
   */
  async update ({ params, request, response }) {
    const data = request.all();
    const bio = await Bio.find(params.id);

    bio.merge(data);

    await bio.save();

    response.status(200).json({
      message: `Bio alterado com sucesso!`,
      data: bio
    });

  }

}

module.exports = BioController
