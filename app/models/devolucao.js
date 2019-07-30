/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('devolucao', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		notafiscal: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'notafiscal',
				key: 'id'
			},
			field: 'notafiscal'
		},
		nfd: {
			type: DataTypes.STRING(11),
			allowNull: true,
			field: 'nfd'
		},
		mov: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'mov'
		},
		motivo: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'devolucao_motivo',
				key: 'id'
			},
			field: 'motivo'
		},
		tipo: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'devolucao_tipo',
				key: 'id'
			},
			field: 'tipo'
		},
		dataEnvio: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dataEnvio'
		},
		dataCobranca: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dataCobranca'
		},
		dataAutorizada: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dataAutorizada'
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
		dataCriado: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'dataCriado'
		},
		obs: {
			type: DataTypes.STRING(450),
			allowNull: true,
			field: 'obs'
		},
		enviado: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'enviado'
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
		empresaSistema: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'empresaSistema'
		},
		usuario: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'usuario',
				key: 'id'
			},
			field: 'usuario'
		}
	}, {
		tableName: 'devolucao'
	});
};
