const connection = require('../database/connection');


module.exports = {
  async index(request, response){

    const products = await connection('products').select('*');

        return response.json(products);
  },

  async create(request, response){
    const {id, title, description, model, value} = request.body;
    
     await connection('products').insert({
      id,
      title,
      description,
      value,
      model,      
    });
    return response.json({id});
  },

  async delete(request, response){
      const {id} = request.params;

      await connection('products').where('id', id).delete()
  
  return response.status(204).send();
  }
};