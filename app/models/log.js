/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('log', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		empresa: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'empresa'
		},
		datahora: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'datahora'
		},
		session: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'session'
		},
		ip: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'ip'
		},
		pc: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'pc'
		},
		cidade: {
			type: DataTypes.STRING(256),
			allowNull: true,
			field: 'cidade'
		},
		uf: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'uf'
		},
		latitude: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'latitude'
		},
		longitude: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'longitude'
		}
	}, {
		tableName: 'log'
	});
};
