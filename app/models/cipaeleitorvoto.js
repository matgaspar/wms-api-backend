/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cipaeleitorvoto', {
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
		eleitor: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'cipaeleitor',
				key: 'id'
			},
			field: 'eleitor'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'cipaeleitorvoto'
	});
};
