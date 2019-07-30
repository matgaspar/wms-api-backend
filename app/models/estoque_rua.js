/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('estoqueRua', {
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
		rua: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'rua'
		},
		posicoes: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'posicoes'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'estoque_rua'
	});
};
