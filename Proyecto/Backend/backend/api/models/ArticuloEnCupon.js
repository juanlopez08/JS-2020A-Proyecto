/**
 * ArticuloEnCupon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cantidad_descuento:{
      type: 'number',
      required: true, // Por defecto es false
    },

    tipo_descuento:{
      type: 'string',
      isIn: ['porciento','efectivo','ninguno'],
      required: true
    },

    // Relaciones
    // ArticuloEnCupon <- Cupon - Muchos a Uno
    cupon: { // Nombre FK
      model: 'Cupon', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },

    // ArticuloEnCupon <- Articulo - Muchos a Uno
    articulo: { // Nombre FK
      model: 'Articulo', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },


  },

};

