const Vlog = (sequelize, DataTypes) => {
  return sequelize.define("vlogs", {
    vlogName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'     
      }
    },
    fileName:{
      type:DataTypes.STRING,
    }
  });
};

export default Vlog;
