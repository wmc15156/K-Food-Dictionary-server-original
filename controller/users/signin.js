// const session = require('express-session');
const { User } = require('../models'); //table이름 User맞나용
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    post: async (req, res) => {
        User.findOrCreate({
            where: {
                username: req.body.email,
                email: req.body.email,
                password: req.body.password
            }
        })
            .then(([result, created]) => {
                console.log(result, created)
            })
            .catch(error => {
                res.status(500).end(error);
            })
    }
};