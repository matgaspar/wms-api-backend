/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('devolucaoTipo', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		nome: {
			type: DataTypes.STRING(256),
			allowNull: true,
			field: 'nome'
		},
		descricao: {
			type: DataTypes.STRING(256),
			allowNull: true,
			field: 'descricao'
		}
	}, {
		tableName: 'devolucao_tipo'
	});
};
