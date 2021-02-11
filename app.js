const express = require('express');
const path = require('path');
const userRouter = require('./routes/userRoutes');
const messageRouter = require('./routes/messageRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, `public`)));
app.use(express.static(path.join(__dirname, `dist`)));

//Body Parser
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/messages', messageRouter);
app.use('/', viewRouter);

module.exports = app;
