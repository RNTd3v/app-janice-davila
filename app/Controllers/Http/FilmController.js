'use strict'

const Film = use('App/Models/Film');
const Category = use('App/Models/Category');

/**
 * Resourceful controller for interacting with films
 */
class FilmController {
  /**
   * Show a list of all films.
   * GET films
   */
  async index () {
    return await Film.all();
  }

  
  /**
   * Create/save a new film.
   * POST films
   */
  async store ({ request, response }) {
    const data = request.all();
    const category = await Category.find(data.category_id);
    const film = await category
      .films()
      .create(data);
    
      response.status(201).json({
        message: `Filme ${data.title_pt} cadastrado com sucesso!`,
        data: film
      });
  }

  /**
   * Display a single film.
   * GET films/:id
   */
  async show ({ params }) {
    const film = await Film.find(params.id)
    const { name, name_pt } = await Category.find(film.category_id);
    const video = await film
      .videos()
      .fetch()
    film.videos = video;
    film.category = { name, name_pt };
    return film;
  }

  /**
   * Update film details.
   * PUT or PATCH films/:id
   */
  async update ({ params, request, response }) {
      const data = request.all();
      const film = await Film.find(params.id);

      film.merge(data);

      await film.save();

      response.status(200).json({
        message: `Filme ${data.title_pt} alterado com sucesso!`,
        data: film
      });
  }

  /**
   * Delete a film with id.
   * DELETE films/:id
   */
  async destroy ({ params, request, response }) {
    const film = await Film.find(params.id);
    await film.delete();

    response.status(200).json({
      message: `Filme deletado com sucesso!`
    });
  }
}

module.exports = FilmController
