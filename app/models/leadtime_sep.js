/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('leadtimeSep', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		empresa: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'empresa'
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
		rua: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'estoque_rua',
				key: 'id'
			},
			field: 'rua'
		},
		mov: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'mov'
		},
		datahora: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'datahora'
		}
	}, {
		tableName: 'leadtime_sep'
	});
};
