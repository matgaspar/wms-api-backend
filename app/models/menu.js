/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('menu', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		menuPai: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'menu',
				key: 'id'
			},
			field: 'menuPai'
		},
		submenu: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			defaultValue: '0',
			field: 'submenu'
		},
		descricao: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'descricao'
		},
		valor: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'valor'
		},
		icon: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'icon'
		},
		ordem: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'ordem'
		},
		ativo: {
			type: DataTypes.INTEGER(1),
			allowNull: false,
			field: 'ativo'
		}
	}, {
		tableName: 'menu'
	});
};
