const sequelize = require("../db");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class GeneroObra extends Model {}
GeneroObra.init({
		generoObraID: {
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
		generoID: {
			type: Sequelize.INTEGER(3),
			allowNull: false,
			references: {
				model: 'genero',
				key: 'generoID'
			}
		}
	}, {
		sequelize,
		modelName: 'genero_obra',
		freezeTableName: true,
		timestamps: false
	}
);


      GeneroObra.associate = (db) => {
        
      };
      module.exports = GeneroObra;
