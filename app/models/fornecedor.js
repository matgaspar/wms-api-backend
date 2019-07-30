/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('fornecedor', {
		cod: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			field: 'cod'
		},
		nome: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'nome'
		}
	}, {
		tableName: 'fornecedor'
	});
};
