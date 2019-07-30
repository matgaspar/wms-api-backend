/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('rotaCidade', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		rota: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'rota',
				key: 'id'
			},
			field: 'rota'
		},
		cidade: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'cidade',
				key: 'id'
			},
			field: 'cidade'
		},
		obs: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'obs'
		},
		dataCriacao: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'dataCriacao'
		}
	}, {
		tableName: 'rota_cidade'
	});
};
