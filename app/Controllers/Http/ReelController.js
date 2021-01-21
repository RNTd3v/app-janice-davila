'use strict';

const Reel = use('App/Models/Reel');

class ReelController {

  /**
   * Show a list of all reels.
   * GET reels
   */
  async index () {
    return await Reel.all();
  }

  /**
   * Display a single reel.
   * GET reels/:id
   */
  async show ({ params }) {
    return await Reel.find(params.id);
  }

  /**
   * Create/save a new reel.
   * POST reels
   */
  async store ({ request, response }) {
    const data = request.all();
    const reel = await Reel.create(data);
    response.status(201).json({
      message: `Reel cadastrada com sucesso!`,
      data: reel
    });
  }

  /**
   * Update reel.
   * PUT or PATCH reels/:id
   */
  async update ({ params, request, response }) {
    const data = request.all();
    const reel = await Reel.find(params.id);

    reel.merge(data);

    await reel.save();

    response.status(200).json({
      message: `Reel alterado com sucesso!`,
      data: reel
    });

  }

  /**
   * Delete a reel.
   * DELETE reels/:id
   */
  async destroy ({ params }) {

    const reel = await Reel.find(params.id);
    await reel.delete();
    return {message: 'Reel deletado com sucesso!'};
  }
}

module.exports = ReelController
