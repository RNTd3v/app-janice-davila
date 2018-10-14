'use strict'

const Category = use('App/Models/Category');

class CategoryController {

    async index () {
        return await Category.all();
    }

    async show () {
        return await Category.find(params.id);
    }

    async allWithFilms() {
        const data = await Category
            .query()
            .with('films')
            .withCount('films as total_count')
            .fetch()

        return data;
    }

    async allWithFilmsAndVideos() {
        const data = await Category
            .query()
            .with('films.videos')
            .fetch()

        return data;
    }

    async allFilmsByCategoryId({ params }) {
        const category = await Category.find(params.id);
        const data = await category.films().fetch();
        
        return {
            category: category.name,
            films: data
        };
    }
}

module.exports = CategoryController
