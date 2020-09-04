/**
 * UsuarioGuardaCupon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre_guardar_cupon:{ // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
    },


    // Relaciones
    // UsuarioGuardaCupon <- Usuario - Muchos a Uno
    usuario: { // Nombre FK
      model: 'Usuario', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },

    cupon: { // Nombre FK
      model: 'Cupon', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },


  },

};

