export function mostrarCadastro(msg) {
    console.log(msg);
}

export function mostrarCadastroDepoisDeUmTempo() {
    setTimeout(function () {
        mostrarCadastro("Cadastro");
    }, 1000);
}