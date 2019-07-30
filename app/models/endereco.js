/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('endereco', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		cidade: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'cidade',
				key: 'id'
			},
			field: 'cidade'
		},
		logradouro: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'logradouro'
		},
		numero: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'numero'
		},
		compl: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'compl'
		},
		bairro: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'bairro'
		},
		cep: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'cep'
		}
	}, {
		tableName: 'endereco'
	});
};
