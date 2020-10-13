// IMPORTS
const express = require('express'); //MÓDULO EXPRESS

const app = express();
const port = 3000;

// ARCHIVOS ESTÁTICOS. PERMITE CARGAR IMAGENES Y ESTILOS CSS.
app.use(express.static('public'));
app.use('/css',express.static(__dirname+ 'public/css'));
app.use('/js',express.static(__dirname+ 'public/js'));
app.use('/img',express.static(__dirname+ 'public/img'));

// SET VIEWS
app.set('views', './views');


// PÁGINA PRINCIPAL (INDEX)
app.get('', (req,res) => {
    res.send('Hello World!');
});


// LISTEN ON PORT 3000
app.listen(port, () => console.info(`Listening on port ${port}`));