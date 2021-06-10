const sequelize = require("../db");
const Sequelize = require("sequelize");
const Model = Sequelize.Model;

class GeneroFav extends Model {}
GeneroFav.init({
		generoFavID: {
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
		modelName: 'genero_fav',
		freezeTableName: true,
		timestamps: false
	}
);


      GeneroFav.associate = (db) => {
        
      };
      module.exports = GeneroFav;
