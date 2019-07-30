/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('agendamento', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		notafiscal: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'notafiscal',
				key: 'id'
			},
			field: 'notafiscal'
		},
		usuario: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'usuario',
				key: 'id'
			},
			field: 'usuario'
		},
		dataAgendada: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dataAgendada'
		},
		dataEntrega: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dataEntrega'
		},
		dataEfetivada: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'dataEfetivada'
		},
		finalizado: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'finalizado'
		},
		dataCadastro: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
			field: 'dataCadastro'
		},
		obs: {
			type: DataTypes.STRING(255),
			allowNull: true,
			field: 'obs'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			field: 'ativo'
		}
	}, {
		tableName: 'agendamento'
	});
};
