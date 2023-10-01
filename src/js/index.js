/*separar o código em pequenas etapas para ser feito (análise inicial)... para assim pensar na lógica*/

//esses comentários são para estudo

/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover 
a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
a seleção dele 
*/

//OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
//passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles

//pegar um elemento do html pelo id -> document.getElementById('')
//nesse caso, não é recomendado fazer isso, pois quanto mais elementos, mais id precisa colocar no html, ou seja, mais trabalho e mais demorado 
//const botao = document.getElementById('chopper');

//aqui pega todos os botoes que tem a classe botao
const botoes = document.querySelectorAll('.botao');
//const =tipo da variavel (constante) botoes = nome da variavel


//OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
//passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem"); 



//(for each)PARA CADA botão vai executar algo
botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        //passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover 
        //a seleção dele

        //busca o elemento do html que tem a classe botao e selecionado
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        //remove a classe selecionado do botão
        botaoSelecionado.classList.remove("selecionado");

        //passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        //adiciona a classe selecionado
       botao.classList.add("selecionado"); 


       //passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
        //a seleção dele
        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");

       //passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
       personagens[indice].classList.add("selecionado");

       

    });
});





