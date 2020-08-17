const { User,FoodInfo } = require('../../models');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  get: (req, res) => {
    try {
      if (req.session.userid) {
        User.findOne({
          where: {
            email: req.session.userid
          },
          include:[{
            model: FoodInfo,
            attributes: ['id', 'foodname', 'spicy','tip','image', 'foodInfo'],
            as: "Liked",
          }],
          
        })
          .then(result => {
            const sumData = result.Liked.map((v) => {
              return v.dataValues
            })
            
            console.log('==========',sumData,'===============');
            return res.status(200).send(sumData);
          })
      } else {
        return res.status(401).send('need user session');
      } 
    } catch(e) {
      console.error(e);
      return res.status(500).send('server error');
    }
  }
};