/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('devolucaoItem', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		devolucao: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'devolucao',
				key: 'id'
			},
			field: 'devolucao'
		},
		ean: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'ean'
		},
		produto: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'produto'
		},
		un: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'un'
		},
		qtd: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'qtd'
		},
		vUni: {
			type: "DOUBLE",
			allowNull: true,
			field: 'vUni'
		},
		vTot: {
			type: "DOUBLE",
			allowNull: true,
			field: 'vTot'
		},
		lote: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'lote'
		},
		fab: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'fab'
		},
		val: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'val'
		}
	}, {
		tableName: 'devolucao_item'
	});
};
