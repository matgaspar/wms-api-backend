/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('usuarioEmpresa', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
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
		empresa: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'empresa',
				key: 'id'
			},
			field: 'empresa'
		},
		ativo: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			field: 'ativo'
		}
	}, {
		tableName: 'usuario_empresa'
	});
};
