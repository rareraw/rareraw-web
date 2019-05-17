// import node modules
const express = require('express');

// create server && config port
const app = express();
const port = process.env.PORT || 5000;

// add && config middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// add server routers
app.use('/api', require('./routes/index'));

// run server
app.listen(port, () => {
   console.log(`Listening on port ${port}`); 
});