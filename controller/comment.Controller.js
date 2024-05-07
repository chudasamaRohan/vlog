import * as commentService from "../service/comment.Service.js";

export const createCommment = async (req, res) => {
    try {
        if (!req.body.comment || req.body.vlogId) {
            return res.status(400).json({ error: 'VlogId and Comment required Filled.' });
          }
        const {comment,vlogId} = req.body
        const userId = req.id
        const datas = await commentService.createComment({vlogId,userId,comment})
        res.send(datas)
    } catch (error) {
        res.send(error)
    }
}

export const getAllCommentList = async(req,res) => {
    try {
        const comments = await commentService.getAllCommentList()
        res.send(comments)
    } catch (error) {
        res.send(error)
    }
}

export const getCommentById = async(req,res) => {
    try {
        if (!req.body.id) {
            return res.status(400).json({ error: 'Plz Enter required CommentId' });
          }
        const comment = await commentService.getCommentById(req.body.id)
        res.send(comment)
    } catch (error) {
        res.send(error)
    }
}

export const commentByVlog = async(req,res) => {
    try {
        if (!req.body.id) {
            return res.status(400).json({ error: 'Plz Enter required VlogId' });
          }
        const vlogId = req.body.id
        const vlogCommentData = await commentService.commentByVlog(vlogId)
        res.send(vlogCommentData)
    } catch (error) {
        res.send(error)
    }
}