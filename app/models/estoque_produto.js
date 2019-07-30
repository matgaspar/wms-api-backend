/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('estoqueProduto', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		sku: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'sku'
		},
		codBarra: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'codBarra'
		},
		produto: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'produto'
		},
		criador: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'usuario',
				key: 'id'
			},
			field: 'criador'
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
		categoria: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'estoque_categoria',
				key: 'id'
			},
			field: 'categoria'
		},
		fornecedor: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'fornecedor'
		},
		minimo: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'minimo'
		},
		maximo: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'maximo'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		},
		dataCriado: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'dataCriado'
		}
	}, {
		tableName: 'estoque_produto'
	});
};
