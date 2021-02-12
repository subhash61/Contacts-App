const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');

const userRouter = require('./routes/userRoutes');
const messageRouter = require('./routes/messageRoutes');
const viewRouter = require('./routes/viewRoutes');
const globalErrorHandler = require('./controller/errorController');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(cors());

app.options('*', cors());

app.use(compression());

app.use(express.static(path.join(__dirname, `public`)));
app.use(express.static(path.join(__dirname, `dist`)));

//Body Parser
app.use(express.json());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/messages', messageRouter);
app.use('/', viewRouter);

app.use(globalErrorHandler);

module.exports = app;
