/* 
 OBJETIVO - Quando clicarmps np botão temos que msotrar imagem de fundo correspondente.

 - Passo 1: dar um jeito de pegar o elemento HTML dos botoes.

 - Passo 2: Dar um jeito de identificar o clique do usuario no botão.

 - Passo 3: Desmarcar o botão selecionado anterior.

 - Passo 4: Marcar o botão clicado como se estivesse selecionado.

 - Passo 5: Esconder a imagem anterior.

 - Passo 6: Fazer aparecer a imagem correspondente ao botão clicado
*/

// Passo 1: dar um jeito de pegar o elemento HTML dos botoes.
const botoesCarrosel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

//- Passo 2: Dar um jeito de identificar o clique do usuario no botão.
botoesCarrosel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
    
        
        //- Passo 3: Desmarcar o botão selecionado anterior.
        const botaoSelecionado = document.querySelector('.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        //- Passo 4: Marcar o botão clicado como se estivesse selecionado. 
        botao.classList.add('selecionado');

        //- Passo 5: Esconder a imagem ativa de  fundo anterior.
        const imagemAtiva = document.querySelector('.ativa');
        imagemAtiva.classList.remove('ativa');

        //- Passo 6: Fazer aparecer a imagem correspondente ao botão clicado
        imagens[indice].classList.add('ativa');
        
    
    })
})