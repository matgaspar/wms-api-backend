/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cipavoto', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		candidato: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'cipacandidato',
				key: 'id'
			},
			field: 'candidato'
		},
		zona: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'cipazona',
				key: 'id'
			},
			field: 'zona'
		},
		secao: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'cipasecao',
				key: 'id'
			},
			field: 'secao'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'cipavoto'
	});
};
