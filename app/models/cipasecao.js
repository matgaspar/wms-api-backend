/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cipasecao', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		zona: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'cipazona',
				key: 'id'
			},
			field: 'zona'
		},
		secao: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'secao'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'cipasecao'
	});
};
