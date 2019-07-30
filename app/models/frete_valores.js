/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('freteValores', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		tributo: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'frete_tributos',
				key: 'id'
			},
			field: 'tributo'
		},
		tabelaFrete: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'frete',
				key: 'id'
			},
			field: 'tabelaFrete'
		},
		descricao: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'descricao'
		},
		porcent: {
			type: "DOUBLE",
			allowNull: true,
			field: 'porcent'
		},
		valor: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'valor'
		},
		dataCadastro: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'dataCadastro'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		},
		somar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'somar'
		}
	}, {
		tableName: 'frete_valores'
	});
};
