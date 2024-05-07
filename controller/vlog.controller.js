import * as vlogService from "../service/vlog.Service.js"

export const createVlog = async (req, res) => {
    try {

        const { vlogName, description } = req.body
        if (!vlogName || !description) {
            return res.status(400).json({ error: 'Plz Enter required filled' });
          }
        const  userId = req.id;
        const vlogFile = req.files
        const vlogData = await vlogService.createVlog({ vlogName, description, userId },vlogFile)
        res.send(vlogData);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

export const vlogList = async(req,res) => {
    try {
        const vlogData = await vlogService.vlogList()
        res.send(vlogData)
    } catch (error) {
        res.send(error)
    }
}
