function obterUsuario() {
    try {
        return JSON.parse(sessionStorage.getItem('rotaMundoUsuario'));
    } catch {
        return null;
    }
}

const usuario = obterUsuario();
if (!usuario) {
    window.location.href = 'index.html';
} else {
    document.getElementById('nomeNav').textContent = usuario.nome;
    document.getElementById('mensagemBoasVindas').textContent =
        `Olá, ${usuario.nome}! Seja muito bem-vindo(a) à RotaMundo Viagens. Aqui você encontra os melhores roteiros, pacotes promocionais e dicas para a sua próxima aventura.`;
}

function sair() {
    sessionStorage.removeItem('rotaMundoUsuario');
}