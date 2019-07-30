/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cipaeleicao', {
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
			type: DataTypes.STRING(45),
			allowNull: false,
			field: 'nome'
		},
		ano: {
			type: "YEAR(4)",
			allowNull: false,
			field: 'ano'
		},
		dataCriacao: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'dataCriacao'
		},
		dataValidade: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'dataValidade'
		},
		qtdEleitos: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'qtdEleitos'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'cipaeleicao'
	});
};
