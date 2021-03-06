/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  datastore: "default" , //nombre conexion
  tableName: "usuario",  //nombre tabla

  attributes: {

    cedula:{ // nombre atributo
      type: 'string',
      required: true, // Por defecto es false
      columnName: 'cedula_usuario',
      unique: true, // Por defecto es false
      minLength: 9,
      maxLength: 25
    },
    nombre_usuario:{
      type: 'string',
      minLength: 3,
      required: true, // Por defecto es false
    },
    apellido_usuario:{
      type: 'string',
      minLength: 3,
      required: true, // Por defecto es false
    },
    correo_usuario:{
      type: 'string',
      isEmail: true, // Por defecto es false
      required: true,
    },
    password_usuario:{
      type: 'string',
      minLength: 3,
      required: true,
    },

    birthdate_usuario:{
      type: 'string',
      minLength: 9,
      required: true,
    },


    // RELACIONES
    // Usuario -> UsuarioTieneRol
    usuarioTieneRoles: {  // Uno a muchos (nombre en plurar)
      collection : 'UsuarioTieneRol',   // Modelo a relacionarse
      via: 'usuario'  // Nombre atributo FK en el modelo relacionado
    },

    // Usuario -> UsuarioGuardaCupon
    usuarioGuardaCupones: {  // Uno a muchos (nombre en plurar)
      collection : 'UsuarioGuardaCupon',   // Modelo a relacionarse
      via: 'usuario'  // Nombre atributo FK en el modelo relacionado
    }

  },

};

