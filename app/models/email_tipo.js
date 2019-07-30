/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emailTipo', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		nome: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'nome'
		},
		descricao: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'descricao'
		},
		envio: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'envio'
		},
		nfe: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'nfe'
		}
	}, {
		tableName: 'email_tipo'
	});
};
