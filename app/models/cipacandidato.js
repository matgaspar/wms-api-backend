/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cipacandidato', {
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
				model: 'cipaeleitor',
				key: 'id'
			},
			field: 'usuario'
		},
		eleicao: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'cipaeleicao',
				key: 'id'
			},
			field: 'eleicao'
		},
		matricula: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'matricula'
		},
		branco: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'branco'
		},
		nulo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'nulo'
		},
		eleito: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'eleito'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'cipacandidato'
	});
};
