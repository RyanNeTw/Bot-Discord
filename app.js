const express = require('express');
const fs = require('fs');
const mysql = require('mysql2');
const { createServer } = require("http");
const { Server } = require("socket.io");
const Discord = require('discord.js')



const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const app = express()
const port = 3000


client.on('message', (message) => {
    if (!message.author.bot && message.content.substring(0,8) === "!create "){
        message.reply("Vous avez ajouté : " + message.content.substring(8, message.content.length))
        connection.query(`INSERT INTO films (id_genre, id_distributeur, titre, resum, date_debut_affiche, date_fin_affiche, duree_minutes, annee_production) VALUES (1, 1, ?, 'Resumé', '2003-07-20', '2300-08-27', 129, 2003)`,[ message.content.substring(8, message.content.length)])
    }else if(!message.author.bot && message.content.substring(0,8) === "!delete "){
        message.reply("Vous avez delete le film avec l'id :" + message.content.substring(8, message.content.length))
        connection.query(`DELETE FROM films WHERE id_film = ?`,[message.content.substring(8, message.content.length)])
    }else if(!message.author.bot && message.content.substring(0,8) === "!update "){
        message.reply("Vous avez change le nom du film avec l'id en :" + message.content.substring(8, message.content.length))
        let array = message.content.split(" /")
        console.log(array)
        connection.query(`UPDATE films SET titre = ? WHERE id_film = ?`,[array[2], array[1]])
    }
})  







const httpServer = createServer(app);
const io = new Server(httpServer, { });
 
const bodyParser = require('body-parser')


// OTc0NjExODEzNzEyOTQ1MTU0.G-15Hy.Tj6xbmOn6Z7vFq-bkftEc6N-goSHjbogiPWN84

io.on("connection", (socket) => {
    console.log("Connection")
});

app.use(bodyParser.json())
app.set('view engine', 'ejs')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cinema'
});

// app.get('/films', (req, res) => {

//     connection.query(`SELECT * FROM films ORDER BY id_film DESC`, (err, results, fields) => {
//         res.render('films', {
//             films: results 
//         })
//     })
    
// })

// app.get('/films/:id', (req, res) => {
//     let id = req.params.id

//     connection.query(`SELECT * FROM films WHERE id_film = ?`, [id], (err, results, fields) => {
//         console.log(results)
//         res.render('film', {
//             film: results[0]
//         })
//     })
 
// })

// app.delete('/api/films/:id', (req, res) => {
//     let id = req.params.id

//     connection.query(`DELETE FROM films WHERE id_film = ?`, [id], (err, results, fields) => {
//         res.json({status: 200, data: "Success"})

//         io.emit("film-delete", id)

//     })

// })

// app.post('/api/films', (req, res) => {
    
//     console.log(req.body) // $_POST
//     console.log(req.query) // $_GET
//     console.log(req.params) // Pas d'équivalent

//     connection.query(`
//         INSERT INTO films 
//         (id_genre, id_distributeur, titre, resum, date_debut_affiche, date_fin_affiche, duree_minutes, annee_production) 
//         VALUES 
//         (1, 1, ?, 'Resumé', '2003-07-20', '2300-08-27', 129, 2003)`, 
//     [ req.body.titre ], (err, results, fields) => {
//         res.json({status: 200, data: "Success"})

//         connection.query(`SELECT * FROM films WHERE id_film = ?`, [results.insertId], (err, results, fields) => {
//             io.emit("film-create", results[0])
//         })

//     })

// })







client.login('OTc0NjExODEzNzEyOTQ1MTU0.G-15Hy.Tj6xbmOn6Z7vFq-bkftEc6N-goSHjbogiPWN84')
httpServer.listen(port);