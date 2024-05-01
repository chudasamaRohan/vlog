


export const userRegister = async (req, res) => {
    try {
        // const{firstName,lastName,age,contactNumber} = req.body
        console.log("req>>>>>>>",req.body);
        res.send("Hello i am from controller.")
       console.log("i am userController.");
    } catch (error) {
        res.send(error)
    }
}



