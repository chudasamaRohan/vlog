import * as userService from "../service/user.Service.js";


export const userRegister = async (req, res) => {
    try {
        const {firstName,lastName,age,contactNumber,email,password} = req.body
        if (!password || !firstName || !lastName || !age || !contactNumber || !email) {
         return res.status(400).json({ error: 'Plz Enter required filled' });
       }
        const datas = await userService.userRegister({firstName,lastName,age,contactNumber,email,password})
        res.send(datas)
    } catch (error) {
        res.send(error)
    }
}

export const updateUser = async(req,res) => {
    try {
       const upData = req.body
       
       const updatedUserData = await userService.updateUser(upData,req)
        res.send(updatedUserData)
    } catch (error) {
        res.send(error)
    }
}

export const userList = async(req,res) => {
    try {
        const userData = await userService.userList()
        res.send(userData)
    } catch (error) {
        res.send(error)
    }
}


