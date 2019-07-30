/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('status', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		nome: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'nome'
		},
		atual: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'atual'
		},
		descricao: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'descricao'
		},
		ordem: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'ordem'
		},
		sistema: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'sistema'
		},
		devolucao: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'devolucao'
		}
	}, {
		tableName: 'status'
	});
};
