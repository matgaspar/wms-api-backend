/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cte', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		numero: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'numero'
		},
		serie: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'serie'
		},
		modelo: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'modelo'
		},
		natureza: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'natureza'
		},
		chave: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'chave'
		},
		dataEmissao: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dataEmissao'
		},
		emitente: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'emitente'
		},
		remetente: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'remetente'
		},
		destinatario: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'destinatario'
		},
		recebedor: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'recebedor'
		},
		vTotal: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'vTotal'
		},
		vReceber: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'vReceber'
		},
		vFrete: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'vFrete'
		},
		vBc: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'vBC'
		},
		vIcms: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'vIcms'
		},
		vFreteTotal: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'vFreteTotal'
		},
		cst: {
			type: DataTypes.STRING(2),
			allowNull: true,
			field: 'cst'
		},
		prodPred: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'prodPred'
		},
		modal: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'modal'
		},
		volumes: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'volumes'
		},
		rntrc: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'rntrc'
		},
		obs: {
			type: DataTypes.STRING(300),
			allowNull: true,
			field: 'obs'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'status',
				key: 'id'
			},
			field: 'status'
		},
		dataCadastro: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'dataCadastro'
		},
		tabelaFrete: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'frete',
				key: 'id'
			},
			field: 'tabelaFrete'
		}
	}, {
		tableName: 'cte'
	});
};
