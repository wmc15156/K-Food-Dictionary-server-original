module.exports = {
    post: (req, res) => {
        req.session.destory((err) => {
            if (!err) {
                res.status(302).redirect('/');
            } else {
                res.status(400).end();
            }
        })
    }
};