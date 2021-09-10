//Rotas

const express = require('express');
const router = express.Router();
const cors = require('cors');
const posts = require('../models/posts');
const { application } = require('express');

const whiteList = {
    origin: "http://localhost:3000"
}

router.use(cors(whiteList));

//Para Ler dados
router.get("/all", (req, res,)=>{

 res.json(JSON.stringify(posts.getAll()));

 
 });

//Para deletar

router.delete('/all/:id', function(req, res) {
    let id = req.params.id;
    router.db('posts').remove({
      id: id
    });
    return res.status(201).end();
  });

 
 //Para Criar um novo post e Salvar dados
 router.post("/new", express.json()/*Meu middleware*/, (req, res)=>{
  
 let title = req.body.title;
 let description = req.body.description;
 
 posts.newPost(title, description);
 
 res.send("Post adicionado");
 
 });

 //Para Excluir um post
//  router.delete('/all/:id', c)

 module.exports = router;