import jwt from "jsonwebtoken";


export const authgaurd = async (req, res, next) => {
    try {

        let token = req.headers["authorization"];
        if (!token) {
            return res.status(403).send({
                message: "No token provided!"
            });
        }
        jwt.verify(token, "mysecret", (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized!"
                });
            }
            req.id = decoded.id
            req.email = decoded.email
            next();
        });
    } catch (error) {
        res.send(error)
    }

}