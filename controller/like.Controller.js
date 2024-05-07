import * as likeService from "../service/like.Service.js"

export const createLike = async (req, res) => {
    try {
        const vlogId = req.body.vlogId
        const userId = req.id
        const datas = await likeService.createLike({vlogId,userId})
        res.send(datas)
    } catch (error) {
        res.send(error)
    }
}


export const likeList = async(req,res) => {
    try {
        const likesData = await likeService.likeList()
        res.send(likesData)
    } catch (error) {
        return error
    }
}

export const likeByVlog = async(req,res) => {
    try {
        if (!req.body.id) {
            return res.status(400).json({ error: 'Plz Enter required VlogId' });
          }
        const vlogId = req.body.id
        const vlogLikeData = await likeService.likeByVlog(vlogId)
        res.send(vlogLikeData)
    } catch (error) {
        res.send(error)
    }
}