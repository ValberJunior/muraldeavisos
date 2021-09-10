//Toda vez que minha página carregar, ela irá chamar
// a Função updatePosts

document.addEventListener('DOMContentLoaded', ()=>{
    updatePosts();
})

//Inicializar o AOS.JS
AOS.init();


//Variaveis
const MY_URL_NEW = "http://192.168.0.2:3000/api/new"
const MY_URL_ALL = "http://192.168.0.2:3000/api/all"
const MY_URL_DEL = "http://192.168.0.2:3000/api/del/:id"


//Evento para o botão enviar

let button = document.getElementById('button');

button.addEventListener('click', newPost);

//Evento a tecla enter;

document.addEventListener('keydown', (event)=>
{
    if (event.key == 'Enter'){
            if ( document.getElementById('title').value != "" &&
            document.getElementById('description').value != ""){
                newPost();
            } else{
                alert("Preencha todos os campos para o item ser adicionado :)")
            }
    }   
})


//Função novo post:

function newPost() {

    

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    if (title != '' && description != '')

   { let post = {title, description};

    const options = {method: "POST",
                    headers: new Headers({'content-type': 'application/json'}),
                    body: JSON.stringify(post)
                };


    fetch(MY_URL_NEW , options).then( res =>{
        console.log(res);
        updatePosts();

        document.getElementById('title').value = "";
        document.getElementById('description').value = "";
    })
   } else{
       alert("Não deixe nenhum campo vazio :)")
   }

}

//Chamada pro backend

function updatePosts(){

fetch(MY_URL_ALL).then(
        res =>{
            return res.json();
        }
    ).then(json =>{
     
        let postElements='';

        let posts = JSON.parse(json);

        posts.forEach((post)=>{
                                //Todo conteudo html que iremos enxergar
                                    let postElement = `     <div class='col'>
                                                            <div id=${post.id} class="card mb-4">

                                                            <div class='card-header'>
                                                                <h5 class='card-title'>${post.title}</h5>
                                                            </div>

                                                            <div class='card-body'>
                                                                <div class='card-text'>
                                                                    ${post.description}
                                                                </div>
                                                                <div class='d-flex justify-content-end me-2'>
                                                                <button class='btn btn-primary rounded-circle' onclick='deleteItem(this)'><i class='far fa-trash-alt fs-3'></i></button>
                                                                </div>
                                                            </div>

                                                            <div class='card-footer'>${post.id}</div>

                                                            </div>

                                                        </div>`;
                                    postElements += postElement;
                                                        })

        let divPosts = document.getElementById('posts');
        divPosts.innerHTML = postElements;
    })

}


//função deletar aviso:

function deleteItem (){
    let confirmation = confirm('Deseja apagar este aviso?')

    if(confirmation){

        let posts = JSON.parse(json);

        posts = posts.filter(post =>{
            post.id != post.getAttribute('id');
        }) ;

        const options = {method: "DELETE"};

        fetch(MY_URL_DEL , options).then( res =>{
            console.log(res)});
            updatePosts();
        }
        
    }

    