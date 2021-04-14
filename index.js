const express = require('express');
const cors = require('cors');
const app = express();
const MarvelController = require('./src/controllers/MarvelController')
const UserController = require('./src/controllers/UserController')
const LoginController = require('./src/controllers/LoginController')
const port = process.env.PORT || 3001

app.use(cors({
  // origin: 'http://localhost:3001',
  origin: 'https://marvel-app-bk.herokuapp.com/', 
  methods: ['GET', 'POST']
}));

app.use(express.json());

app.use('/', MarvelController);

app.use('/', UserController);

app.use('/', LoginController);

//localhost test
app.get('/', (req, res) => res.send('Hello Marvel App!'))

app.listen(port, () => console.log(`Running at ${port}`))
