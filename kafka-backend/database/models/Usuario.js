const sequelize = require("../db");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class Usuario extends Model {}
Usuario.init({
		usuarioID: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			autoIncrement: true
		},
		nombreUsuario: {
			type: Sequelize.STRING(25),
			allowNull: false,
			unique: true
		},
		email: {
			type: Sequelize.STRING(250),
			allowNull: false,
			unique: true
		},
		password: {
			type: Sequelize.STRING(64),
			allowNull: false
		},
		nombre: {
			type: Sequelize.STRING(60),
			allowNull: true
		},
		apellido: {
			type: Sequelize.STRING(60),
			allowNull: true
		},
		seudonimo: {
			type: Sequelize.STRING(60),
			allowNull: true
		},
		fechaNacimiento: {
			type: Sequelize.DATEONLY,
			allowNull: true
		},
		pais: {
			type: Sequelize.STRING(70),
			allowNull: true
		},
		fotoPerfil: {
			type: Sequelize.STRING(500),
			allowNull: false,
			defaultValue: 'https://www.labicok.com/wp-content/uploads/2020/06/default-user-image.png'
		},
		bio: {
			type: Sequelize.TEXT,
			allowNull: true
		},
		tipoUsuario: {
			type: Sequelize.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		fechaCreacion: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		fechaModificacion: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		sequelize,
		modelName: 'usuario',
		freezeTableName: true,
		timestamps: false
	}
);


      Usuario.associate = (db) => {
        
      };
      module.exports = Usuario;
