'use strict'

const Helpers = use('Helpers')

class UploadController {
    async index({ request, response }) {
        const { category, title } = request.all();
        const file = request.file('picture', {
            types: ['image'],
            size: '2mb'
        });

        const date = new Date().getTime();
        
        await file.move(Helpers.publicPath('static/uploads'), {
            name: `${category}-${title}-${date}.${file.subtype}`,
            overwrite: true
        })

        if (!file.moved()) {
            return file.error()
          }
        
        response.status(200).json({
            message: `Imagem salva com sucesso!`,
            data: `/static/uploads/${category}-${title}-${date}.${file.subtype}`
        });
    }
}

module.exports = UploadController
