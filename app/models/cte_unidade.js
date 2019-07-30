/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cteUnidade', {
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
		cUnid: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'cUnid'
		},
		nome: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'nome'
		},
		qCarga: {
			type: "DOUBLE",
			allowNull: true,
			field: 'qCarga'
		}
	}, {
		tableName: 'cte_unidade'
	});
};
