/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cipaeleitor', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		empresa: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'empresa'
		},
		nome: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'nome'
		},
		cpf: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'cpf'
		},
		email: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'email'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'cipaeleitor'
	});
};
