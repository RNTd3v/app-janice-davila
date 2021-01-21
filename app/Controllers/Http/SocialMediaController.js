'use strict'

const SocialMedia = use('App/Models/SocialMedia');

/**
 * Resourceful controller for interacting with socialmedias
 */
class SocialMediaController {
  /**
   * Show a list of all socialmedias.
   * GET socialmedias
   */
  async index () {
    return await SocialMedia.all();
  }


  /**
   * Create/save a new socialmedia.
   * POST socialmedias
   */
  async store ({ request }) {

    const data = request.all();
    const socialmedia = await SocialMedia.create(data);
    return socialmedia;
  }

  /**
   * Display a single socialmedia.
   * GET socialmedias/:id
   */
  async show ({ params }) {
    return await SocialMedia.find(params.id);
  }


  /**
   * Update socialmedia details.
   * PUT or PATCH socialmedias/:id
   */
  async update ({ params, request }) {

    const data = request.all();
    const socialmedia = await SocialMedia.find(params.id);

    socialmedia.merge(data);
    await socialmedia.save();

    return socialmedia;
  }

  /**
   * Delete a socialmedia with id.
   * DELETE socialmedias/:id
   */
  async destroy ({ params, request, response }) {

    const socialmedia = await SocialMedia.find(params.id);
    await socialmedia.delete();
    return {message: 'Social Media deletado com sucesso!'};
  }
}

module.exports = SocialMediaController
