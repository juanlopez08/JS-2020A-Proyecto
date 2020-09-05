/**
 * FechaUso.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    fecha_uso:{
      type: 'string',
      minLength: 9,
      required: true,
    },


    // FechaUso <- UsuarioGuardaCupon - Muchos a Uno
    usuarioGuardaCupon: { // Nombre FK
      model: 'UsuarioGuardaCupon', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },

  },

};

