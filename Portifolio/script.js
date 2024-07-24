// Certifique-se de que o DOM esteja completamente carregado antes de manipular os elementos
document.addEventListener('DOMContentLoaded', function() {
    // Selecionar todos os botões de virar página
    const botoesVirarPagina = document.querySelectorAll(".nextprev-btn");

    // Iterar sobre cada botão
    botoesVirarPagina.forEach((el, index) => {
        // Adicionar evento de clique
        el.addEventListener('click', () => {
            // Obter o ID da página a ser virada
            const idPaginaVirar = el.getAttribute("data-page");
            const paginaVirar = document.getElementById(idPaginaVirar);

            // Verificar se a página possui a classe 'turn'
            if (paginaVirar.classList.contains("turn")) {
                // Remover a classe 'turn' se estiver presente
                paginaVirar.classList.remove("turn");
                // Definir zIndex após um pequeno atraso para efeito visual
                setTimeout(() => {
                    paginaVirar.style.zIndex = 20 - index;
                }, 500);
            } else {
                // Adicionar a classe 'turn' se não estiver presente
                paginaVirar.classList.add("turn");
                setTimeout(() => {
                    paginaVirar.style.zIndex = 20 + index;
                }, 500);
            }
        });
    });
})

// Selecionando o botão "Contact Me" e o perfil do botão
const contactMeBtn = document.querySelector(".contact-me");
const contactBtn = document.querySelector(".back-profile");

// Função para voltar para a página de perfil
contactBtn.addEventListener("click", () => {
    // Esconder a página de contato e mostrar a página de perfil
    document.querySelector(".page-back#turn-3").classList.remove("show");
    document.querySelector(".page-left").classList.add("show");

    // Adicionar a classe 'turn' para a animação de virar a página
    document.querySelector(".cover-right").classList.add("turn");

    // Redefinir a animação de z-index após a troca de página
    setTimeout(() => {
        document.querySelector(".book").classList.remove("turn");
        document.querySelector(".book").classList.add("turn");
    }, 500); // Ajuste o tempo conforme necessário
});

// Função para mostrar a página de contato ao clicar em "Contact Me"
contactMeBtn.addEventListener("click", () => {
    // Esconder a página de perfil e mostrar a página de contato
    document.querySelector(".page-left").classList.remove("show");
    document.querySelector(".page-back#turn-3").classList.add("show");

    // Remover a classe 'turn' para a animação de virar a página
    document.querySelector(".cover-right").classList.remove("turn");

    // Redefinir a animação de z-index após a troca de página
    setTimeout(() => {
        document.querySelector(".book").classList.remove("turn");
        document.querySelector(".book").classList.add("turn");
    }, 500); // Ajuste o tempo conforme necessário
});

// Selecionando o botão "Back Profile" na página de contato
const backProfileBtn = document.querySelector(".back-profile");

// Adicionando um evento de clique ao botão "Back Profile"
backProfileBtn.addEventListener("click", () => {
    // Esconder a página de contato e mostrar a página de perfil
    document.querySelector(".page-back#turn-3").classList.remove("show");
    document.querySelector(".page-left").classList.add("show");

    // Adicionar a classe 'turn' para a animação de virar a página
    document.querySelector(".cover-right").classList.add("turn");

    // Redefinir a animação de z-index após a troca de página
    setTimeout(() => {
        document.querySelector(".book").classList.remove("turn");
        document.querySelector(".book").classList.add("turn");
    }, 500); // Ajuste o tempo conforme necessário
});
