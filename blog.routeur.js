const express = require('express');

//Créer un nouvel objet "Router"
const blogRouter = express.Router();

blogRouter.get('/', (request, response) => {
    const prenom = "ET";
    response.render('index.pug', { prenom });
});

blogRouter.get('/admin', (request, response) => {
    response.send('Bienvenue sur l\'espace d\'administration!');
});

//exporte l'objet router crée
module.exports=blogRouter;