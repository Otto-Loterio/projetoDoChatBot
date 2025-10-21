var botaoJanela = document.getElementById('botaoJanela')
var botaoModoEscuro = document.getElementById('botaoModoEscuro')
var chatBot = document.getElementById('chatBot')
var bodyChatBot = document.getElementById('bodyChatBot')
var inputUsuario = document.getElementById('inputUsuario')
var botaoEnviar = document.getElementById('botaoEnviar')
var botaoFechar = document.getElementById('botaoFechar')
var botaoMaximizar = document.getElementById('botaoMaximizar')
var body = document.getElementsByTagName('body')[0]
var estadoModoEscuro = false
var estadoDaJanela = true
var maximizacaoJanela = false


botaoModoEscuro.addEventListener('click', ativarModoescuro)
botaoJanela.addEventListener('click', abrirJanela)
botaoEnviar.addEventListener('click', enviarMensagem)
botaoFechar.addEventListener('click', fechar)
botaoMaximizar.addEventListener('click', maximizar)
inputUsuario.addEventListener('keydown',
    function (event) {
        if (event.key === 'Enter') {
            enviarMensagem();
        }
    });

function ativarModoescuro() {
    if (estadoModoEscuro) {
        document.body.classList.remove('modoEscuro')

        botaoModoEscuro.style.background = '#504c41'
        body.style.background = '#eeeeee'
        bodyChatBot.style.background = '#fff'
        inputUsuario.style.background = '#fff'
        botaoModoEscuro.style.borderColor = '#0c0c0c'
        inputUsuario.style.color = '#000'

        botaoModoEscuro.innerHTML = '⚫'

        estadoModoEscuro = !estadoModoEscuro
    }
    else {


        document.body.classList.add('modoEscuro')

        botaoModoEscuro.style.background = '#f3f3f3ff'
        body.style.background = '#444444ff'
        bodyChatBot.style.background = '#969696ff'
        inputUsuario.style.background = '#e0e0e0ff'
        botaoModoEscuro.style.borderColor = '#7e7e7eff'
        inputUsuario.style.color = '#0a0a0aff'

        botaoModoEscuro.innerHTML = '⚪'

        estadoModoEscuro = !estadoModoEscuro
    }
}
function abrirJanela() {
    if (estadoDaJanela) {
        chatBot.style.display = 'flex'
        estadoDaJanela = !estadoDaJanela
    }

    else {
        chatBot.style.display = 'none'
        estadoDaJanela = !estadoDaJanela
    }
}
function enviarMensagem() {
    var msgUsuario = inputUsuario.value
    if (msgUsuario != "") {
        var mensagemFutura = document.createElement('p')
        mensagemFutura.textContent = `Você: ${msgUsuario}`
        bodyChatBot.appendChild(mensagemFutura)
        inputUsuario.value = ""

        bodyChatBot.scrollTop = bodyChatBot.scrollHeight; //Scrolla o coiso automaticamente 

        setTimeout(function () {
            var mensagemBot = document.createElement('p')
            mensagemBot.textContent = 'Bot: Nossa que interessante!'
            bodyChatBot.appendChild(mensagemBot)

            bodyChatBot.scrollTop = bodyChatBot.scrollHeight
        }, 200) //responde 2 segundos depois 
    }
}
function fechar() {
    chatBot.style.display = 'none'
    estadoDaJanela = !estadoDaJanela
}
function maximizar() {
    if (maximizacaoJanela === false) {
        chatBot.style.width = "100vw";
        chatBot.style.height = "100vh";
        chatBot.style.bottom = "0";
        chatBot.style.right = "0";
        chatBot.style.borderRadius = "0";
        chatBot.style.zIndex = "9999";
        botaoMaximizar.innerHTML = "🗗";
        maximizacaoJanela = true;
    }
    else {
        chatBot.style.width = "300px";
        chatBot.style.height = "400px";
        chatBot.style.bottom = "80px";
        chatBot.style.right = "20px";
        chatBot.style.borderRadius = "10px";
        chatBot.style.zIndex = "1";
        botaoMaximizar.innerHTML = "⛶";
        maximizacaoJanela = false;
    }
}