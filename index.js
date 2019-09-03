const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const provasRouter = require('./routes/provas')


const app = express();


app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false }))
app.use('/provas',provasRouter)


app.get('/', (req, res, next) => {
  res.render('index', {
    titulo: 'Gerador de Declarações de Prova'
  });
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000);
