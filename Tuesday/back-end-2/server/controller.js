const db = require(`./db.json`);
let houseId = db.length + 1;

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(db);
    },
    createHouse: (req, res) => {
        let newHouse = {id: houseId, ...req.body};
        // Since we're using the spread operator, we need to convert the price back into a number as that is what the rest of the database has their prices as.
        newHouse.price = +newHouse.price;

        db.push(newHouse);
        houseId++;
        res.status(200).send(db);
    },
    deleteHouse: (req, res) => {
        let {id} = req.params;

        // Finds the index where the user asked for in the database.
        let index = db.findIndex((e) => e.id === +id);
        
        // Splice the database at "index" to delete the house so it doesn't show on the webpage.
        db.splice(index, 1);
        res.status(200).send(db);
    },
    updateHouse: (req, res) => {
        let {id} = req.params;
        let {type} = req.body;

        // Finds the index where the user asked for in the database.
        let index = db.findIndex((e) => e.id === +id)
        
        // Confirms if the price should go up or down.
        if(type === `minus`) db[index].price -= 10000;
        else db[index].price += 10000;

        // If for some reason the price drops so low it becomes a negative number, this puts the price at $0.
        if(db[index].price < 0) db[index].price = 0; 
        res.status(200).send(db);
    }
}