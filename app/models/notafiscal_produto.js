/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('notafiscalProduto', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		produto: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'produto',
				key: 'id'
			},
			field: 'produto'
		},
		notafiscal: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'notafiscal',
				key: 'id'
			},
			field: 'notafiscal'
		},
		qtd: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'qtd'
		},
		valorUnitario: {
			type: "DOUBLE",
			allowNull: true,
			field: 'valorUnitario'
		},
		valorTotal: {
			type: "DOUBLE",
			allowNull: true,
			field: 'valorTotal'
		}
	}, {
		tableName: 'notafiscal_produto'
	});
};
