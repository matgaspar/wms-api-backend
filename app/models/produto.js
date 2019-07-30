/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('produto', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		descricao: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'descricao'
		},
		codBarra: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'codBarra'
		},
		ncm: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'ncm'
		},
		valorUnitario: {
			type: "DOUBLE",
			allowNull: true,
			field: 'valorUnitario'
		},
		unidade: {
			type: DataTypes.STRING(50),
			allowNull: true,
			field: 'unidade'
		},
		ativo: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'produto'
	});
};
