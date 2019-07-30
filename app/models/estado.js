/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('estado', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		nome: {
			type: DataTypes.STRING(75),
			allowNull: false,
			field: 'nome'
		},
		uf: {
			type: DataTypes.STRING(2),
			allowNull: false,
			field: 'uf'
		},
		ibge: {
			type: DataTypes.INTEGER(2),
			allowNull: true,
			field: 'ibge'
		},
		pais: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'pais',
				key: 'id'
			},
			field: 'pais'
		},
		ddd: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'ddd'
		}
	}, {
		tableName: 'estado'
	});
};
