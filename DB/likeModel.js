const Like = (sequelize,DataTypes) => {
    return sequelize.define("likes",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        userId:{
            type:DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'id'     
              }
        },
        vlogId:{
            type:DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Vlogs',
                key: 'id'     
              }
        }
    })
}
export default Like;