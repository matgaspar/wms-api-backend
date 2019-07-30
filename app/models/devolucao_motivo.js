/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('devolucaoMotivo', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		nome: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'nome'
		},
		descricao: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'descricao'
		},
		prioridade: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'prioridade'
		}
	}, {
		tableName: 'devolucao_motivo'
	});
};
