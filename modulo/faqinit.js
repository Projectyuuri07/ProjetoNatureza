export function toggleResposta(pergunta) {
    const resposta = pergunta.nextElementSibling; // Encontre a resposta associada à pergunta

    if (resposta.style.display === "block") {
        resposta.style.display = "none"; // Se estiver aberta, feche
    } else {
        resposta.style.display = "block"; // Se estiver fechada, abra
    }
}

// Configura um evento de clique para cada elemento com a classe "faq-pergunta"
const faqPerguntas = document.querySelectorAll(".faq-pergunta");

faqPerguntas.forEach(pergunta => {
    pergunta.addEventListener("click", () => {
        toggleResposta(pergunta);
    });
});