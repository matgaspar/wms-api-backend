const sequelizePaginate = require('sequelize-paginate');

module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define(
    'Empresa',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
      },
      razaoSocial: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'razaoSocial',
      },
      matriz: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: 'empresa',
          key: 'id',
        },
        field: 'matriz',
      },
      endereco: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: 'endereco',
          key: 'id',
        },
        field: 'endereco',
      },
      codEmp: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        field: 'codEmp',
      },
      fantasia: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'fantasia',
      },
      cnpj: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'cnpj',
      },
      ie: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: 'ie',
      },
      im: {
        type: DataTypes.STRING(45),
        allowNull: true,
        field: 'im',
      },
      telefone: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'telefone',
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'email',
      },
      transportadora: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        field: 'transportadora',
      },
      ativo: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        field: 'ativo',
      },
      sistema: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        field: 'sistema',
      },
      empresaSistema: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: 'empresa',
          key: 'id',
        },
        field: 'empresaSistema',
      },
    },
    {
      timestamps: false,
      tableName: 'empresa',
    },
  );

  sequelizePaginate.paginate(Empresa);

  return Empresa;
};
