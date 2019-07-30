/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('devolucaoStatus', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		usuario: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'usuario',
				key: 'id'
			},
			field: 'usuario'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'status',
				key: 'id'
			},
			field: 'status'
		},
		devolucao: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'devolucao',
				key: 'id'
			},
			field: 'devolucao'
		},
		datahora: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'datahora'
		},
		obs: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'obs'
		}
	}, {
		tableName: 'devolucao_status'
	});
};
