export function ola(){
    console.log("olá mundo!!!")
}

//Função para exibir o texto correspondente à imagem clicada
export function showContent(contentId) {
    var content = document.getElementById(contentId);
    content.style.display = "block";
}

//Função para ocultar o texto correspondente à imagem clicada
export function hideContent(contentId) {
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