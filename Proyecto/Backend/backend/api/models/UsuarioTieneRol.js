/**
 * UsuarioTieneRol.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre_relacion:{ // nombre atributo
      type: 'string',
      required: true, // Por defecto es false

    },


    // Relaciones
    // UsuarioTieneRol <- Usuario - Muchos a Uno
    usuario: { // Nombre FK
      model: 'Usuario', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },

    rol: { // Nombre FK
      model: 'Rol', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },

  },

};

