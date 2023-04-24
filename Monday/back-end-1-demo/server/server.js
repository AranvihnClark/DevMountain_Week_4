// Imports and packages needed to create/run the server.
const express = require('express');
const cors = require(`cors`);

// Initializing express.
const app = express();

// Middleware.
app.use(express.json());
app.use(cors());

// Dummy-data/fake database
const inventory = [`greeting card`, `table`, `chair`, `milk`, `boat`, `cookies`, `cheese`, `shampoo`, `conditioner`, `face wash`];

// Endpoints
app.get(`/api/inventory`, (req, res) => {
    if(req.query.item) {
        const filteredItems = inventory.filter((i) =>
            i.toLowerCase().includes(req.query.item.toLowerCase()));
        res.status(200).send(filteredItems);
    } else res.status(200).send(inventory);
});

// Endpoint with a parameter
app.get(`/api/inventory/:id`, (req, res) => {
    const {id} = req.params
    res.status(200).send(inventory[id]);
});

// Runs the server for us on port 5050.
app.listen(5050, () => console.log('Jamming on 5000'));

