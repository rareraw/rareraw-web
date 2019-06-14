// import node modules
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

// create server && config port, etc
const app = express();
const port = process.env.PORT || 5000;

// add && config middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// jglee Temp
// let models = require('./models/index');
// models.RECRUITMENT_SITE.create({
//    name: 'test',
//    crwaling_root_urls: 'https://test.com',
//    is_use: true,
//    addtional_urls: ''
// }).then(result => {
//    console.log("데이터 추가 성공");
//    console.log(result);
// }).catch(err => {
//    console.log("데이터 추가 실패");
//    console.log(err);
// });


// add server routers
app.use('/api', require('./routes/index'));
app.use('/api/recruitment', require('./routes/recruitment'));

// run server
app.listen(port, () => {
   console.log(`Listening on port ${port}`); 
});