/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('statusNotafiscal', {
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
		notafiscal: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'notafiscal',
				key: 'id'
			},
			field: 'notafiscal'
		},
		datahora: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'datahora'
		},
		obs: {
			type: DataTypes.STRING(256),
			allowNull: true,
			field: 'obs'
		}
	}, {
		tableName: 'status_notafiscal'
	});
};
