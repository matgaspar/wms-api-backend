/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pais', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		nome: {
			type: DataTypes.STRING(60),
			allowNull: true,
			field: 'nome'
		},
		nomeEn: {
			type: DataTypes.STRING(60),
			allowNull: true,
			field: 'nome_en'
		},
		sigla: {
			type: DataTypes.STRING(2),
			allowNull: true,
			field: 'sigla'
		},
		bacen: {
			type: DataTypes.INTEGER(5),
			allowNull: true,
			field: 'bacen'
		}
	}, {
		tableName: 'pais'
	});
};
