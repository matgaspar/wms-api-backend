/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('canhotoRomaneio', {
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
		transportadora: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'transportadora'
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
		numero: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'numero'
		},
		dataEmissao: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'dataEmissao'
		},
		dataCriacao: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'dataCriacao'
		},
		dataAtualizacao: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'dataAtualizacao'
		}
	}, {
		tableName: 'canhoto_romaneio'
	});
};
