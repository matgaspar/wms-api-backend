/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('frete', {
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
		usuario: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'usuario',
				key: 'id'
			},
			field: 'usuario'
		},
		empresa: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'empresa'
		},
		transportadora: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'transportadora'
		},
		origemUf: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'estado',
				key: 'id'
			},
			field: 'origemUF'
		},
		destinoUf: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'estado',
				key: 'id'
			},
			field: 'destinoUF'
		},
		nacional: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'nacional'
		},
		pFreteValor: {
			type: "DOUBLE",
			allowNull: true,
			field: 'pFreteValor'
		},
		pFretePeso: {
			type: "DOUBLE",
			allowNull: true,
			field: 'pFretePeso'
		},
		pTolerancia: {
			type: "DOUBLE",
			allowNull: true,
			field: 'pTolerancia'
		},
		min: {
			type: "DOUBLE",
			allowNull: true,
			field: 'min'
		},
		max: {
			type: "DOUBLE",
			allowNull: true,
			field: 'max'
		},
		dataCadastro: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'dataCadastro'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		},
		obs: {
			type: DataTypes.STRING(500),
			allowNull: true,
			field: 'obs'
		}
	}, {
		tableName: 'frete'
	});
};
