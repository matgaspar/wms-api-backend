/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('coleta', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		nf: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'notafiscal',
				key: 'id'
			},
			field: 'nf'
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
		transportadora: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'transportadora'
		},
		nfdv: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'nfdv'
		},
		os: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'os'
		},
		obs: {
			type: DataTypes.STRING(1000),
			allowNull: true,
			field: 'obs'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'status',
				key: 'id'
			},
			field: 'status'
		},
		dataSolicitada: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'dataSolicitada'
		},
		dataColeta: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dataColeta'
		},
		finalizado: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'finalizado'
		},
		enviado: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'enviado'
		},
		motivoCancelamento: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'motivoCancelamento'
		}
	}, {
		tableName: 'coleta'
	});
};
