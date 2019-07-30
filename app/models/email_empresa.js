/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('emailEmpresa', {
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
		emailTipo: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'email_tipo',
				key: 'id'
			},
			field: 'email_tipo'
		},
		nome: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'nome'
		},
		email: {
			type: DataTypes.STRING(250),
			allowNull: false,
			field: 'email'
		},
		obs: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'obs'
		},
		dataCriado: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'dataCriado'
		},
		dataAtualizado: {
			type: DataTypes.DATE,
			allowNull: true,
			field: 'dataAtualizado'
		},
		host: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'host'
		},
		porta: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'porta'
		},
		usuario: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'usuario'
		},
		senha: {
			type: DataTypes.STRING(250),
			allowNull: true,
			field: 'senha'
		},
		smtpAuth: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'smtpAuth'
		},
		smtpSecure: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'smtpSecure'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'ativo'
		}
	}, {
		tableName: 'email_empresa'
	});
};
