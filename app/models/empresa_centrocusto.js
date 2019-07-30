/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('empresaCentrocusto', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
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
		centrocusto: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'centrocusto'
		},
		descricao: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'descricao'
		},
		obs: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'obs'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'empresa_centrocusto'
	});
};
