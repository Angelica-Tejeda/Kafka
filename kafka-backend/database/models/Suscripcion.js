const sequelize = require("../db");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class Suscripcion extends Model {}
Suscripcion.init({
		suscripcionID: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			autoIncrement: true
		},
		usuarioID: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			references: {
				model: 'usuario',
				key: 'usuarioID'
			}
		},
		planID: {
			type: Sequelize.INTEGER(11),
			allowNull: false,
			references: {
				model: 'plan',
				key: 'planID'
			}
		},
		estado: {
			type: Sequelize.INTEGER(1),
			allowNull: false,
			defaultValue: '1'
		},
		fechaInicio: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		fechaFin: {
			type: Sequelize.DATE,
			allowNull: false
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
		modelName: 'suscripcion',
		freezeTableName: true,
		timestamps: false
	}
);


      Suscripcion.associate = (db) => {
        
      };
      module.exports = Suscripcion;
