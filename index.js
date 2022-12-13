const express = require('express')
const fs = require("fs");
const bodyParser = require("body-parser")
const uniqid = require('uniqid'); 
const sanitizeHtml = require('sanitize-html');

const dataFile = "./data/players.json";
const port = 3000

const app = express()

//get product by id
app.get('/players/:id', function (req, res) {
    let id = req.params.id;

    //beolvassuk az összes adatot: json -> obj
    fs.readFile(dataFile, (error, data)=>{
        let players = JSON.parse(data);

        //megkeressük a megfelelő product-ot id alján
        const playersById = players.find(player => player.id === id)
        if (!playersById) {
            // nincs meg
            let message = {
                error: `id: ${id} not found`
            };
            res.status(404);
            res.send(message);
            return;
        }
        //visszaküldjük
        res.send(playersById);
    });
})

//get products
app.get('/players', function (req, res) {
    fs.readFile(dataFile, (error, data)=>{
        let players = data;
        res.send(players);
    });
})


//delete product by id
app.delete('/players/:id', function (req, res) {
    let id = req.params.id;

    //beolvassuk az összes adatot: json -> obj
    fs.readFile(dataFile, (error, data)=>{
        let players = JSON.parse(data);

        //megkeressük a megfelelő product indexét id alján
        const playersIndexById = players.findIndex(player => player.id === id)

        if (playersIndexById === -1) {
            // nincs meg
            let message = {
                error: `id: ${id} not found`
            };
            res.status(404);
            res.send(message);
            return;
        }
        //letöröljük
        players.splice(playersIndexById, 1);

        //visszaír: obj -> json
        players = JSON.stringify(players)
        fs.writeFile(dataFile, players, (error)=>{
            console.log(error);
            //visszaküldjük, hogy melyik id-t töröltük
            res.send({id: id});
        })
    });
})

//put product by id
app.put('/players/:id', bodyParser.json(),function (req, res) {
    let id = req.params.id;
    let putPlayers = {
        id: id, 
        name: sanitizeHtml(req.body.name),
        qualification: req.body.qualification, 
        position: req.body.position, 
        club: req.body.club, 
        age: req.body.age, 
        nationality: req.body.nationality 
    }
    //beolvassuk az összes adatot: json -> obj
    fs.readFile(dataFile, (error, data)=>{
        let players = JSON.parse(data);

        //megkeressük a megfelelő product indexét id alján
        const playersIndexById = players.findIndex(player => player.id === id)

        if (playersIndexById === -1) {
            // nincs meg
            let message = {
                error: `id: ${id} not found`
            };
            res.status(404);
            res.send(message);
            return;
        }
        //felülírjuk
        players[playersIndexById] = putPlayer;

        //visszaír: obj -> json
        players = JSON.stringify(players)
        fs.writeFile(dataFile, players, (error)=>{
            console.log(error);
            //visszaküldjük, a módosított rekordot
            res.send(putPlayer);
        })
    });
})

//post
app.post('/players',bodyParser.json(), function (req, res) {
    let newPlayer = {  
        id: uniqid(), 
        name: sanitizeHtml(req.body.name),
        qualification: req.body.qualification, 
        position: req.body.position, 
        club: req.body.club, 
        age: req.body.age, 
        nationality: req.body.nationality 
    }

    
    fs.readFile(dataFile,(error, data)=>{
        //beolvas, json -> obj
        let players = JSON.parse(data);
        //push
        players.push(newPlayer);
        //visszaír: obj -> json
        players = JSON.stringify(players)
        fs.writeFile(dataFile, players, (error)=>{
            console.log(error);
            res.send(newPlayer);
        })

    })

})

app.listen(port)

//<script>alert('betörtem')</scrip>