/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('estoqueLancamento', {
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
				model: 'estoque_produto',
				key: 'id'
			},
			field: 'produto'
		},
		centrocusto: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'empresa_centrocusto',
				key: 'id'
			},
			field: 'centrocusto'
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
		favorecido: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'usuario',
				key: 'id'
			},
			field: 'favorecido'
		},
		tipo: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'tipo'
		},
		qtd: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'qtd'
		},
		obs: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'obs'
		},
		data: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'data'
		}
	}, {
		tableName: 'estoque_lancamento'
	});
};
