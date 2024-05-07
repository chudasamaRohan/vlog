import * as AuthService from "../service/auth.Service.js";
// import dbConnection from "../DB/dbConnection.js";

export const login = async (req, res) => {
  try {
   
    const loginData = req.body;
    if (!loginData.email || !loginData.password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    const token = await AuthService.login(loginData);
    res.send(token);
  } catch (error) {
    res.send(error);
  }
};
