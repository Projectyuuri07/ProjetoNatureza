console.log("olá mundo!!!")

//Função para exibir o texto correspondente à imagem clicada
function showContent(contentId) {
    var content = document.getElementById(contentId);
    content.style.display = "block";
}

//Função para ocultar o texto correspondente à imagem clicada
function hideContent(contentId) {
    var content = document.getElementById(contentId);
    content.style.display = "none";
}

//Event listeners para as imagens
document.getElementById("natureza-img").addEventListener("click", function() {
    showContent("natureza-content");
    hideContent("praias-content");
    hideContent("montanhas-content");
    hideContent("florestas-content");
});
document.getElementById("praias-img").addEventListener("click", function() {
    showContent("praias-content");
    hideContent("natureza-content");
    hideContent("montanhas-content");
    hideContent("florestas-content");
});
document.getElementById("montanhas-img").addEventListener("click", function() {
    showContent("montanhas-content");
    hideContent("natureza-content");
    hideContent("praias-content");
    hideContent("florestas-content");
});
document.getElementById("florestas-img").addEventListener("click", function() {
    showContent("florestas-content");
    hideContent("natureza-content");
    hideContent("praias-content");
    hideContent("montanhas-content");
});

document.addEventListener('DOMContentLoaded', function () {
    // Obtém a lista de perguntas e respostas
    const faqItems = document.querySelectorAll('.faqtexto li');

    // Itera sobre cada item do FAQ para adicionar o evento de clique
    faqItems.forEach((item) => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');

        // Adiciona o evento de clique para abrir/fechar a resposta
        question.addEventListener('click', () => {
            const isAnswerShown = answer.style.display === 'block';

            // Fecha todas as respostas
            faqItems.forEach((item) => {
                const answer = item.querySelector('p');
                answer.style.display = 'none';
                item.querySelector('h3').classList.remove('open');
            });

            // Abre a resposta apenas se não estiver aberta
            if (!isAnswerShown) {
                answer.style.display = 'block';
                question.classList.add('open');
            }
        });

        // Fecha todas as respostas ao carregar a página
        answer.style.display = 'none';
    });
});
