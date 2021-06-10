const sequelize = require("../db");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class Aporte extends Model {}
Aporte.init({
		aporteID: {
			type: Sequelize.BIGINT,
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
		seccionID: {
			type: Sequelize.BIGINT,
			allowNull: false,
			references: {
				model: 'seccion',
				key: 'seccionID'
			}
		},
		contenido: {
			type: Sequelize.TEXT,
			allowNull: true
		},
		seleccionado: {
			type: Sequelize.INTEGER(1),
			allowNull: false,
			defaultValue: '0'
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
		modelName: 'aporte',
		freezeTableName: true,
		timestamps: false
	}
);


      Aporte.associate = (db) => {
        
      };
      module.exports = Aporte;
