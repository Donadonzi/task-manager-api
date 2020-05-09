const express = require('express');
require('./db/mongoose');
const path = require('path');

const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');


const app = express();
const port = process.env.PORT;

const publicDirectory = path.join(__dirname, '../public');
app.use(express.static(publicDirectory));


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);


app.listen(port, () => {
	console.log('Yallah! Server umad bala roo port ' + port);
});


