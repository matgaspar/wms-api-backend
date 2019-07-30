/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('wsFuncao', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		fnNome: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'fn_nome'
		},
		fnParam: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'fn_param'
		},
		fnRetorno: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'fn_retorno'
		}
	}, {
		tableName: 'ws_funcao'
	});
};
