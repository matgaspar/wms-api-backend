/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('canhotoLocal', {
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
		prefixo: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'prefixo'
		},
		numero: {
			type: DataTypes.INTEGER(4).UNSIGNED.ZEROFILL,
			allowNull: true,
			field: 'numero'
		},
		sufixo: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'sufixo'
		},
		ativo: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'ativo'
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
		tableName: 'canhoto_local'
	});
};
