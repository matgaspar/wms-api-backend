/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cteValor', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		cte: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'cte',
				key: 'id'
			},
			field: 'cte'
		},
		nome: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'nome'
		},
		valor: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'valor'
		}
	}, {
		tableName: 'cte_valor'
	});
};
