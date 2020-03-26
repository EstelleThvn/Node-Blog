const express = require('express');

//Créer un nouvel objet "Router"
const blogRouter = express.Router();

blogRouter.get('/', (request, response) => {
    const prenom = "ET";
    response.render('index.pug', { prenom });
});

blogRouter.get('/article/:id', (request, response) => {
    response.render('article.pug');
});

blogRouter.get('/admin/', (request, response) => {
    response.render('./admin/admin.pug');
});

blogRouter.get('/admin/write', (request, response) => {
    response.render('./admin/write.pug');
});

blogRouter.get('/admin/edit/:id', (request, response) => {
    response.render('./admin/edit.pug');
});

//exporte l'objet router crée
module.exports=blogRouter;