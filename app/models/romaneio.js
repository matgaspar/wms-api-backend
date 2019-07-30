/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('romaneio', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		usuario: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'usuario',
				key: 'id'
			},
			field: 'usuario'
		},
		numero: {
			type: DataTypes.INTEGER(10),
			allowNull: true,
			field: 'numero'
		},
		nome: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'nome'
		},
		data: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'data'
		},
		obs: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'obs'
		},
		qtd: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'qtd'
		},
		carga: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'carga'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'romaneio'
	});
};
