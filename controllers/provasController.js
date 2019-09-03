const Prova = require('../models/provaModel')

exports.postNovaProva = (req, res, next) => {
    let novaProva = new Prova( req.body.disciplina,req.body.professor,req.body.dataProva) 
    novaProva.salvar()
    res.redirect('/provas')
}

exports.getNovaProva = (req, res, next) => {
    res.render('novaProva');
}

exports.getProvas = (req, res, next) => {
    console.log('getProvas');
    res.render('provas',{
      'provas': Prova.listar(),
    });
  }
