const { User } = require('../../models');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    post: async (req, res) => {
      console.log('확인합니다.');
    }
}