/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('usuarioMenu', {
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
		menu: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'menu',
				key: 'id'
			},
			field: 'menu'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			field: 'ativo'
		}
	}, {
		tableName: 'usuario_menu'
	});
};
