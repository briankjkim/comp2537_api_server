const express = require('express');
const app = express();
const cors = require('cors');
const https = require('https');
const mongoose = require('mongoose');
const bodyparser = require("body-parser");


app.use(cors());



app.listen(process.env.PORT || 5000, function (err) {
    if (err)
        console.log(err);
})


// Mongodb address "mongodb+srv://kkjin0330:5VO1M61v9prYQEpp@cluster0.msyad.mongodb.net/hello"
// Connect to mongodb with mongoose module
mongoose.connect("mongodb+srv://kkjin0330:5VO1M61v9prYQEpp@cluster0.msyad.mongodb.net/hello", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const pokemonSchema = new mongoose.Schema({
    abilities: Array,
    base_experience: Number,
    forms: Array,
    game_indices: Array,
    height: Number,
    held_items: Array,
    id: Number,
    is_default: Boolean,
    location_area_encounters: String,
    moves: Array,
    name: String,
    order: Number,
    species: {},
    sprites: {},
    stats: Array,
    types: Array,
    weight: Number
})

const typeSchema = new mongoose.Schema({
    damage_relations: {},
    game_indices: Array,
    generation: Object,
    id: Number,
    move_damage_class: {},
    moves: Array,
    name: String,
    names: Array,
    past_damage_relations: Array,
    pokemon: Array
})

const habitatSchema = new mongoose.Schema({
    id: Number,
    name: String,
    names: Array,
    pokemon_species: Array,
})


const pokemonModel = mongoose.model("pokemon_by_ids", pokemonSchema);
const typeModel = mongoose.model("pokemon_by_types", typeSchema);
const habitatModel = mongoose.model("pokemon_by_habitats", habitatSchema);


app.use(bodyparser.urlencoded({
    parameterLimit: 100000,
    limit: '50mb',
    extended: true
}));



// app.get('/:id', function (req, res) {
//     let id = req.params.id;
//     console.log("GET Request received");
//     res.sendFile(__dirname + `/${id}.json`);
// })


// READ pokemon api with id from the server with GET Request
app.get('/pokemon_by_id/:id', function (req, res) {
    let pokemon_id = req.params.id
    console.log(`Received a GET request for ${pokemon_id}`);
    pokemonModel.find({'id': pokemon_id}, function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + data);
        }
        res.send(data);
    });
})

// READ pokemon api with type_id from the server with GET Request
app.get('/pokemon_by_type/:id', function (req, res) {
    let type_id = req.params.id
    console.log(`Received a GET request for ${type_id}`);
    typeModel.find({'id': type_id}, function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + data);
        }
        res.send(data);
    });
})


// READ pokemon api with habitat_id from the server with GET Request
app.get('/pokemon_by_habitat/:id', function (req, res) {
    let habitat_id = req.params.id
    console.log(`Received a GET request for ${habitat_id}`);
    habitatModel.find({'id': habitat_id}, function (err, data) {
        if (err) {
            console.log("Error " + err);
        } else {
            console.log("Data " + data);
        }
        res.send(data);
    });
})