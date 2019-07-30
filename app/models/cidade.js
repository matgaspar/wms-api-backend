/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cidade', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		nome: {
			type: DataTypes.STRING(120),
			allowNull: false,
			field: 'nome'
		},
		estado: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'estado',
				key: 'id'
			},
			field: 'estado'
		},
		ibge: {
			type: DataTypes.INTEGER(7),
			allowNull: true,
			field: 'ibge'
		}
	}, {
		tableName: 'cidade'
	});
};
