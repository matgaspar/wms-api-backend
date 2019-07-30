/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tipoEmail', {
		id: {
			type: DataTypes.INTEGER(100),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		tipo: {
			type: DataTypes.STRING(256),
			allowNull: false,
			field: 'tipo'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			field: 'ativo'
		}
	}, {
		tableName: 'tipo_email'
	});
};
