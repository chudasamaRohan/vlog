import dbConnection from "../DB/dbConnection.js";

export const createLike = async (likeData) => {
  try {
    const likeSaveData = await dbConnection.Likes.create(likeData);
    return likeSaveData;
  } catch (error) {
    return error;
  }
};

export const likeList = async () => {
  try {
    const likesData = await dbConnection.Likes.findAll({
      include: {
        model: dbConnection.Users,
        attributes: ["id", "firstName", "lastName"],
      },
    });
    
    return likesData;
  } catch (error) {
    error;
  }
};

export const likeByVlog = async(vlogId) => {
  try {
    const likeData = await dbConnection.Likes.findAll({
      where:{
        vlogId:vlogId,
      },
        include:{ 
          model:dbConnection.Users,
          attributes: ['id', 'firstName', 'lastName',] 
        }
    })
    return {likeData,totalCount:likeData.length}
    
  } catch (error) {
    return error
  }
}