module.exports = (sequelize, DataTypes) => sequelize.define(
  'abastecimentoProduto',
  {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    abastecimento: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'abastecimento',
        key: 'id',
      },
      field: 'abastecimento',
    },
    rua: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'rua',
    },
    codigo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'codigo',
    },
    produto: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'produto',
    },
    marca: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: 'marca',
    },
    embalagem: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'embalagem',
    },
    estoque: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      field: 'estoque',
    },
    local: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'local',
    },
    super: {
      type: DataTypes.STRING(500),
      allowNull: true,
      field: 'super',
    },
    quantidade: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      field: 'quantidade',
    },
    curva: {
      type: DataTypes.STRING(1),
      allowNull: true,
      field: 'curva',
    },
  },
  {
    tableName: 'abastecimento_produto',
  },
);
