/**
 * Articulo.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre_articulo: {
      type: 'string',
      minLength: 3,
      required: true
    },

    precio_articulo:{
      type: 'number',
      required: true, // Por defecto es false
    },

    // RELACIONES
    // Articulo -> ArticuloEnCupon
    articulosEnCupones: {  // Uno a muchos (nombre en plurar)
      collection : 'ArticuloEnCupon',   // Modelo a relacionarse
      via: 'articulo'  // Nombre atributo FK en el modelo relacionado
    }

  },

};

