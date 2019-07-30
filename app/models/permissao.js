/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('permissao', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		usuarioempresa: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'usuario_empresa',
				key: 'id'
			},
			unique: true,
			field: 'usuarioempresa'
		},
		empresaCriar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'empresa_criar'
		},
		empresaEditar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'empresa_editar'
		},
		empresaDeletar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'empresa_deletar'
		},
		empresaVisualizar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'empresa_visualizar'
		},
		usuarioCriar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'usuario_criar'
		},
		usuarioEditar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'usuario_editar'
		},
		usuarioDeletar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'usuario_deletar'
		},
		usuarioVisualizar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'usuario_visualizar'
		},
		statusCriar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'status_criar'
		},
		statusEditar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'status_editar'
		},
		statusDeletar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'status_deletar'
		},
		statusVisualizar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'status_visualizar'
		},
		notaCriar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'nota_criar'
		},
		notaEditar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'nota_editar'
		},
		notaDeletar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'nota_deletar'
		},
		notaVisualizar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'nota_visualizar'
		},
		agendamentoCriar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'agendamento_criar'
		},
		agendamentoEditar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'agendamento_editar'
		},
		agendamentoDeletar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'agendamento_deletar'
		},
		agendamentoVisualizar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'agendamento_visualizar'
		},
		devolucaoCriar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'devolucao_criar'
		},
		devolucaoEditar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'devolucao_editar'
		},
		devolucaoDeletar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'devolucao_deletar'
		},
		devolucaoVisualizar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'devolucao_visualizar'
		},
		coletaCriar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'coleta_criar'
		},
		coletaEditar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'coleta_editar'
		},
		coletaDeletar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'coleta_deletar'
		},
		coletaVisualizar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'coleta_visualizar'
		},
		estoqueCriar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'estoque_criar'
		},
		estoqueEditar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'estoque_editar'
		},
		estoqueDeletar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'estoque_deletar'
		},
		estoqueVisualizar: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			field: 'estoque_visualizar'
		}
	}, {
		tableName: 'permissao'
	});
};
