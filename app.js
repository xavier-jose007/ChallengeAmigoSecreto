//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos=[];
let regexSpace = /^[ ]+/;
let regexEmpty=/^$/;
let tentativaSorteio = 0;
let senha = "1234";

function adicionarAmigo(){
   let nome = document.getElementById('amigo').value;

       if(regexSpace.test(nome) || regexEmpty.test(nome)){
        
         alert("Por favor insira um nome.");

      }else{
         amigos.push(nome);
      }
   document.getElementById('amigo').value= '';
}
function sortearAmigo() {
   tentativaSorteio++
   console.log("Tentativa sorteio: " + tentativaSorteio)
   if (tentativaSorteio==1){
      let quantosAmigos= amigos.length;
      console.log ("Quantos amigos? "+ quantosAmigos);

         if (quantosAmigos>0){
            let indexSorteado = parseInt(Math.random() * quantosAmigos);

            console.log("Index Sorteado " + indexSorteado);
            let sorteado = amigos[indexSorteado];

            document.getElementById('resultado').innerHTML= sorteado;
         } else{
            alert("E preciso inserir nomes parar sortear.");
         }
   }else{
      let senhaUsuario = prompt ("Digite a senha para sortear além da primeira tentativa.");
         if (senha == senhaUsuario) {
            tentativaSorteio=0;
            sortearAmigo();
         } else {
            alert("Sorteio encerrado.");

         }
      

   }
}
