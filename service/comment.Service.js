import dbConnection from "../DB/dbConnection.js";

export const createComment = async (commentData) => {
    try {
      const commentSaveData = await dbConnection.Comments.create(commentData);
      return commentSaveData;
    } catch (error) {
      return error;
    }
  };

  export const getAllCommentList = async () => {
    try {
      const commnets = await dbConnection.Comments.findAll( {include: {
        model: dbConnection.Users, 
        attributes: ['id', 'firstName', 'lastName',] 
      }
    })
      return commnets;
    } catch (error) {
    return error      
    }
  }

  export const getCommentById = async(commentId) => {
    try {
      const commentUserData = await dbConnection.Comments.findOne({where:{
        id:commentId
      },
    include:{
      model:dbConnection.Users,
      attributes:['id','firstName','lastName','age','contactNumber','email']
    }
  }
  )
  return commentUserData
    } catch (error) {
      return error
    }
  }

  export const commentByVlog = async(vlogId) => {
    try {
      const commentByVlog = await dbConnection.Comments.findAll({
        where:{
          vlogId:vlogId,
        },
          include:{ 
            model:dbConnection.Users,
            attributes: ['id', 'firstName', 'lastName',] 
          }
      })
      return {commentByVlog,totalCount:commentByVlog.length}
      
    } catch (error) {
      return error
    }
  }