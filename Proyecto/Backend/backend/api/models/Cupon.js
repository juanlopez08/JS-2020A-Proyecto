/**
 * Cupon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    path_imagen_cupon:{ // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      minLength: 3,
      // unique: true, // Por defecto es false
    },

    path_codigo_qr_cupon:{
      type: 'string',
      minLength: 3,
      required: true, // Por defecto es false
    },
    informacion_cupon:{
      type: 'string',
      minLength: 3,
      maxLength: 100,
      required: true, // Por defecto es false
    },
    estado_cupon:{
      type: 'string',
      isIn: ['activo', 'inactivo'],
      required: true,

    },
    cantidad_usos:{
      type: 'number',
      required: true,
    },

    // RELACIONES
    // Cupon -> UsuarioGuardaCupon
    usuarioGuardaCupones: {  // Uno a muchos (nombre en plurar)
      collection : 'UsuarioGuardaCupon',   // Modelo a relacionarse
      via: 'cupon'  // Nombre atributo FK en el modelo relacionado
    },

    // Cupon -> ArticuloEnCupon
    articulosEnCupones: {  // cupon tiene muchos articulos
      collection : 'ArticuloEnCupon',   // Modelo a relacionarse
      via: 'cupon'  // Nombre atributo FK en el modelo relacionado
    },

    // Cupon <- Establecimiento - Muchos a Uno
    establecimiento: { // Nombre FK
      model: 'Establecimiento', // Modelo con el cual relacionamos
      required: true, // Requerida 1 - N
      //false // Opcional  0 - N (por defecto)
    },

  },

};

