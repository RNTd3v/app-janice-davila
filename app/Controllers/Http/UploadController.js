'use strict'

const Helpers = use('Helpers')

class UploadController {
    async index({ request, response }) {
        const { category, title } = request.all();
        const file = request.file('picture', {
            types: ['image'],
            size: '2mb'
        });
        
        await file.move(Helpers.publicPath('uploads'), {
            name: `${category}-${title}-${new Date().getTime()}.${file.subtype}`,
            overwrite: true
        })

        if (!file.moved()) {
            return file.error()
          }
        
        response.status(200).json({
            message: `Imagem salva com sucesso!`,
            data: `./uploads/${category}-${title}-${new Date().getTime()}.${file.subtype}`
        });
    }
}

module.exports = UploadController
