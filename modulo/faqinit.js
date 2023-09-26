export function toggleResposta(pergunta) {
    const resposta = pergunta.nextElementSibling; // Encontre a resposta associada à pergunta

    if (resposta.style.display === "block") {
        resposta.style.display = "none"; // Se estiver aberta, feche
    } else {
        resposta.style.display = "block"; // Se estiver fechada, abra
    }
}

const faqPerguntas = document.querySelectorAll(".faq-pergunta");

faqPerguntas.forEach(pergunta => {
    pergunta.addEventListener("click", () => {
        toggleResposta(pergunta);
    });
});