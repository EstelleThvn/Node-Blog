const express = require('express');
const app = express();
const blogRouter = require('./blog.routeur');

app.set('view engine', 'pug'); //indique à Express que le moteur de templating à utiliser sera "Pug"
app.set('views', './views'); //indique à Express le dossier où se trouvent les vues (fichiers .pug)

const PORT = 9000;
const HOST = 'localhost';

app.use ('/', blogRouter); //traite toutes les routes pour la partie front office

//démarrage de l'application
//-----------------------------------

app.listen(PORT,HOST, () => {
    console.log(`Express : le serveur écoute sur http://${HOST}:${PORT}`);
});