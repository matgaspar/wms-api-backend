const sequelizePaginate = require('sequelize-paginate');

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    'Usuario',
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
      },
      nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
        field: 'nome',
      },
      empresa: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: 'empresa',
          key: 'id',
        },
        field: 'empresa',
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
      matricula: {
        type: DataTypes.STRING(10),
        allowNull: false,
        field: 'matricula',
      },
      cpf: {
        type: DataTypes.STRING(15),
        allowNull: true,
        field: 'cpf',
      },
      rg: {
        type: DataTypes.STRING(15),
        allowNull: true,
        field: 'rg',
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'email',
      },
      telefone: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'telefone',
      },
      login: {
        type: DataTypes.STRING(100),
        allowNull: true,
        field: 'login',
      },
      senha: {
        type: DataTypes.STRING(255),
        allowNull: true,
        field: 'senha',
      },
      admin: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        field: 'admin',
      },
      ativo: {
        type: DataTypes.INTEGER(1),
        allowNull: false,
        field: 'ativo',
      },
    },
    {
      timestamps: false,
      tableName: 'usuario',
    },
  );

  sequelizePaginate.paginate(Usuario);

  return Usuario;
};
