/**
 * UsuarioGuardaCupon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    cantidad_usos:{ // nombre atributo
      type: 'number',
      required: true, // Por defecto es false
    },


    // Relaciones
    // UsuarioGuardaCupon <- Usuario - Muchos a Uno
    usuario: { // Nombre FK
      model: 'Usuario', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },

    // UsuarioGuardaCupon <- Cupon
    cupon: { // Nombre FK
      model: 'Cupon', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },

    // UsuarioGuardaCupon -> FechaUso
    fechaUsos: {  // Uno a muchos (nombre en plurar)
      collection : 'FechaUso',   // Modelo a relacionarse
      via: 'usuarioGuardaCupon'  // Nombre atributo FK en el modelo relacionado
    }

  },

};

