/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('produtoLote', {
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
		lote: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'lote'
		},
		qtd: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'qtd'
		},
		fab: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'fab'
		},
		val: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'val'
		}
	}, {
		tableName: 'produto_lote'
	});
};
