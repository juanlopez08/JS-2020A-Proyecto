/**
 * Establecimiento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre_establecimiento:{
      type: 'string',
      minLength: 3,
      maxLength: 60,
      required: true, // Por defecto es false
    },

    categoria_establecimiento:{
      type: 'string',
      minLength: 3,
      maxLength: 60,
      required: true, // Por defecto es false
    },

    telefono_establecimiento:{
      type: 'string',
      minLength: 5,
      maxLength: 45,
      required: true, // Por defecto es false
    },

    direccion_establecimiento:{
      type: 'string',
      minLength: 3,
      maxLength: 45,
      required: true, // Por defecto es false
    },

    // RELACIONES
    // Establecimiento -> Cupon
    cupones: {  // Uno a muchos (nombre en plurar)
      collection : 'Cupon',   // Modelo a relacionarse
      via: 'establecimiento'  // Nombre atributo FK en el modelo relacionado
    },

  },

};

