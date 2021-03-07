const db = require('../config/db');
const User = db.user;

export async function getAllUsers (req, res) {
    try{
        const users = await User.findAll();
        res.json({
            data: users
        });
    }
    catch(error){
        res.status(500).json({
            message: "Error",
            data: error});
    }
}