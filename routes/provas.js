const express = require ('express')
const router = express.Router();
const pc = require('../controllers/provasController')

  router.post('/nova', pc.postNovaProva);
  router.get('/nova', pc.getNovaProva);
  router.get('/', pc.getProvas);


  module.exports = router