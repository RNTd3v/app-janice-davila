'use strict'

const Video = use('App/Models/Video');
const Film = use('App/Models/Film');

class VideoController {


  async index() {
    return await Video.all();
  }


  /**
   * Create/save a new film.
   * POST films
   */
  async store({ request, response }) {
    const data = request.all();
    const film = await Film.find(data.film_id);
    const video = await film
      .videos()
      .create(data);

    response.status(201).json({
      message: 'Video cadastrado com sucesso!',
      data: video
    });
  }

  /**
   * Display a single film.
   * GET films/:id
   */
  async show({ params }) {
    return await Film.find(params.id)
  }

  /**
   * Update film details.
   * PUT or PATCH videos/:id
   */
  async update ({ params, request, response }) {
    const data = request.all();
    const video = await Video.find(params.id);

    video.merge(data);

    await video.save();

    response.status(200).json({
      message: `Video ${data.title_pt} alterado com sucesso!`,
      data: video
    });
}

/**
 * Delete a film with id.
 * DELETE videos/:id
 */
async destroy ({ params, request, response }) {
  const video = await Video.find(params.id);
  await video.delete();

  response.status(200).json({
    message: `Video deletado com sucesso!`
  });
}
}

module.exports = VideoController
