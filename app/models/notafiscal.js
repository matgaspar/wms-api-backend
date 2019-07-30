/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('notafiscal', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		destinatario: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'destinatario'
		},
		transportadora: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
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
		romaneio: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'romaneio',
				key: 'id'
			},
			field: 'romaneio'
		},
		numeroNf: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'numeroNF'
		},
		serie: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'serie'
		},
		natureza: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'natureza'
		},
		dataEmissao: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'dataEmissao'
		},
		qtdVolume: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'qtdVolume'
		},
		valorNf: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'valorNF'
		},
		valorFrete: {
			type: DataTypes.DECIMAL,
			allowNull: true,
			field: 'valorFrete'
		},
		xml: {
			type: "MEDIUMBLOB",
			allowNull: true,
			field: 'xml'
		},
		obs: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'obs'
		},
		chaveAcesso: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'chaveAcesso'
		},
		danfe: {
			type: DataTypes.STRING(256),
			allowNull: true,
			field: 'danfe'
		},
		dataCadastro: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'dataCadastro'
		},
		empresaSistema: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'empresaSistema'
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'status',
				key: 'id'
			},
			field: 'status'
		}
	}, {
		tableName: 'notafiscal'
	});
};
