// Import Database
const db = require(`../db.json`);
    var id = db.length;
// Callbacks
module.exports = {
    getAllMovies : (req, res) => {
    let allMovies = db;
    res.status(200).send(allMovies);
    },
    createMovie : (req, res) => {
        id++
        let newMovie = {...req.body, id: id};
        console.log(newMovie);
        db.push(newMovie);
        res.status(200).send(db);
    },
    deleteMovie: (req, res) => {
        let {id} = req.params;
        for(let i = 0; i < db.length; i++) {
            if(db[i].id === +id) db.splice(i, 1);
        }
        res.status(200).send(db);
    },
    updateMovie: (req, res) => {
        let {id} = req.params;
        let {type} = req.body;
        
        for(let i = 0; i < db.length; i++) {
            if(db[i].id === +id) {
                if(type === `plus`) db[i].rating++
                else db[i].rating--
                if(db[i].rating > 5) db[i].rating = 5;
                if(db[i].rating < 1) db[i].rating = 1;
            }
        }
        res.status(200).send(db);
    } 
}