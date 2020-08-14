const { FoodInfo } = require('../../models');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  // 페이지 업로드 요청시 데이터 추가하는 로직 테스트가 필요합니다.
  
  post: async (req, res) => {
    try {
      const { foodName, foodInfo, tip, spicy, sort, image } = req.body;
      console.log(foodName, foodInfo, tip, spicy, sort);
      const data = await FoodInfo.create({
        foodname: foodName,
        sort,
        spicy,
        tip,
        image,
        foodInfo
      });
      res.status(200).json({ id: data.id })
    } catch (e) {
      console.error(e);
      res.status(404).send('저장하지 못했습니다.');
    }

    res.end();
  }
}