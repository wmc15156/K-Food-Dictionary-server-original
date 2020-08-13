const { User } = require('../../models');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    post: async (req, res) => {
        User.findOrCreate({
            where: {
                email: req.body.email,
                username: req.body.username,
                password: req.body.password
            }
        })
            .then(([result, created]) => {
                if (created) {
                    res.status(200).send({
                        username: result.username,
                        createdAt: result.createdAt
                    });
                } else {
                    res.status(409).send('Already signed up');
                }
            })
            .catch(error => {
                res.status(500).send(error);
            })
    }
}