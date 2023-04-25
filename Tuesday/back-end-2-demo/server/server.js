const express = require('express');
const cors = require(`cors`);
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import callbacks/controllers
const userController = require(`./controllers/usercontroller`)
const {getAllMovies, createMovie, deleteMovie, updateMovie} = userController;

// Endpoints/Routes
app.get(`/api/movies`, getAllMovies);
app.post(`/api/movies`, createMovie);
app.delete(`/api/movies/:id`, deleteMovie);
app.put(`/api/movies/:id`, updateMovie);

app.listen(4004, () => console.log('Jamming on 4004'));