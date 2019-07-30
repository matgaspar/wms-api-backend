/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'freteTributos',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'nome',
      },
      descricao: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'descricao',
      },
      bcValorCarga: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        field: 'BCValorCarga',
      },
      bcFreteValor: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        field: 'BCFreteValor',
      },
      bcFreteTotal: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        field: 'BCFreteTotal',
      },
      ativo: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        field: 'ativo',
      },
    },
    {
      tableName: 'frete_tributos',
    },
  );
};
