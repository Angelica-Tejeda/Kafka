const sequelize = require("../db");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class MetodoPago extends Model {}
MetodoPago.init({
		metodoPagoID: {
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
		tipoPago: {
			type: Sequelize.INTEGER(1),
			allowNull: false
		},
		fechaCreacion: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		fechaModificaicon: {
			type: Sequelize.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		sequelize,
		modelName: 'metodo_pago',
		freezeTableName: true,
		timestamps: false
	}
);


      MetodoPago.associate = (db) => {
        
      };
      module.exports = MetodoPago;
