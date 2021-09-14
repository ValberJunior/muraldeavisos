module.exports = {

    //posts do mural
 posts : [],

getAll(){
    return this.posts;
},

newPost(title, description){

    this.posts.push({id: generateId(), title, description});

},

deletePost(id){
    
    this.posts = this.posts.filter(post =>{
       return post.id != id;
    })

},



}

//Função para gerar o ID:

function generateId () {
    return Math.random().toString(36).substr(2,9);
};