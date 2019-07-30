/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rota', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		empresa: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'empresa'
		},
		transportadora: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'transportadora'
		},
		usuario: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'usuario',
				key: 'id'
			},
			field: 'usuario'
		},
		nome: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'nome'
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'email'
		},
		obs: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'obs'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'rota'
	});
};
