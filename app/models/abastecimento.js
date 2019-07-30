/* jshint indent: 1 */

module.exports = (sequelize, DataTypes) => sequelize.define(
  'abastecimento',
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    empresa: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'empresa',
        key: 'id',
      },
      field: 'empresa',
    },
    usuario: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id',
      },
      field: 'usuario',
    },
    descricao: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'descricao',
    },
    data: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'data',
    },
    dataValidade: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'dataValidade',
    },
    obs: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'obs',
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      field: 'ativo',
    },
  },
  {
    tableName: 'abastecimento',
  },
);
