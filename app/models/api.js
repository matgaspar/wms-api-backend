/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('api', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		empresa: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'empresa'
		},
		tipo: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'tipo'
		},
		apikey: {
			type: DataTypes.STRING(256),
			allowNull: true,
			field: 'apikey'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'api'
	});
};
