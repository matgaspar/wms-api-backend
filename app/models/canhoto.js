/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('canhoto', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
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
		usuario: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'usuario',
				key: 'id'
			},
			field: 'usuario'
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
		romaneio: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'romaneio',
				key: 'id'
			},
			field: 'romaneio'
		},
		local: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'canhoto_local',
				key: 'id'
			},
			field: 'local'
		},
		numero: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'numero'
		},
		dataEmissao: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dataEmissao'
		},
		dataCriacao: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'dataCriacao'
		},
		dataAtualizado: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'dataAtualizado'
		}
	}, {
		tableName: 'canhoto'
	});
};
