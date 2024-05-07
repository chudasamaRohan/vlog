const Comment = (sequelize,DataTypes) => {
    return sequelize.define("comments",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        comment:{
            type:DataTypes.STRING,
            allowNull:false
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
export default Comment;