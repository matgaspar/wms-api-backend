/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cipazona', {
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
			field: 'zona'
		},
		local: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'local'
		},
		endereco: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'endereco'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'cipazona'
	});
};
