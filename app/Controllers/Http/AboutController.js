'use strict';

const About = use('App/Models/About');

/**
 * Resourceful controller for interacting with abouts
 */
class AboutController {
  /**
   * Show a list of all abouts.
   * GET abouts
   */
  async index () {
    const data = await About
            .query()
            .with('phone')
            .with('email')
            .with('social_media')
            .fetch()

    return data;
  }

  /**
   * Create/save a new about.
   * POST abouts
   */
  async store ({ request, response }) {

    const data = request.all();
    const about = await About.create(data);
    response.status(201).json({
        message: `About cadastrado com sucesso!`,
        data: about
    });

  }

  /**
   * Update about details.
   * PUT or PATCH abouts/:id
   */
  async update ({ params, request, response }) {
    const data = request.all();
    const about = await About.find(params.id);

    about.merge(data);

    await about.save();

    response.status(200).json({
        message: `About alterado com sucesso!`,
        data: about
    });
  }

}

module.exports = AboutController
