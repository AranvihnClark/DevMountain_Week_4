const express = require('express');
const cors = require(`cors`);

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


// Import callbacks/controllers
const userController = require(`./controller.js`);

const {getHouses, deleteHouse, createHouse, updateHouse} = userController;

app.get(`/api/houses`, getHouses);
app.post(`/api/houses`, createHouse);
app.delete(`/api/houses/:id`, deleteHouse);
app.put(`/api/houses/:id`, updateHouse);

app.listen(4004, () => console.log('Jamming on 4004'));