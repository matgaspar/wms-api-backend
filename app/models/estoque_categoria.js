/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('estoqueCategoria', {
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
		categoria: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'categoria'
		},
		descricao: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'descricao'
		},
		ativo: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'estoque_categoria'
	});
};
