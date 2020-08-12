const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const PORT = 5000;

dotenv.config();
console.log(process.env.SESSION_SECRET_KEY, '222222');

app.use(cors());
app.use(cookieParser('1234'));
app.use(session({
  secret: '1234',
  resave: false, // resave는 요청이 왔을 때 세션에 수정 사항이 생기지 않더라도 세션을 다시 저장할지에 대한 설정
  saveUninitialized: false, // saveUninitialized는 세션에 저장할 내역이 없더라도 세션을 저장할지에 대한 설정
}));
app.use(logger());
// app.use(express.json());

app.post('/', (req, res) => {
  console.log(req.body, '22222');
  res.end();
});

app.listen(PORT, () => {
  console.log(`${PORT}번포트에 연결됨!`);
});
