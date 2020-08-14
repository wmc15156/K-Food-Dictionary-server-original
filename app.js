const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const usersRouter = require('./routes/users');
const foodRouter = require('./routes/products');
const db = require('./models');

const app = express();
const PORT = process.env.NODE_ENV || 5000;



dotenv.config();
db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.log('연결실패'));
app.use(cors({
  origin: 'http//localhost:3000',
  credentials: true
}));
app.use(cookieParser(process.env.SESSION_SECRET_KEY));
app.use(session({
  secret: process.env.SESSION_SECRET_KEY,
  resave: false, // resave는 요청이 왔을 때 세션에 수정 사항이 생기지 않더라도 세션을 다시 저장할지에 대한 설정
  saveUninitialized: false, // saveUninitialized는 세션에 저장할 내역이 없더라도 세션을 저장할지에 대한 설정
}));

app.use(logger());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hello world');
});

app.use('/user', usersRouter);
app.use('/product', foodRouter);

app.listen(PORT, () => {
  console.log(`${PORT}번포트에 연결됨`);
});

