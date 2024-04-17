function mostrarTodos(){
    let jogadores = document.getElementById("artilharia2")
    let removerpdd = document.getElementById("artilharia")
    let botao =  document.getElementById("botao-MostrarTodos")
    let botaoOcultar = document.getElementById("ocultar")

    removerpdd. style.paddingBottom = "0px"
    jogadores.style.display = "flex"
    botao.style.display = "none"
    botaoOcultar.style.display ="flex"
}

function ocultar(){
    let jogadores = document.getElementById("artilharia2")
    let adicionarpdd = document.getElementById("artilharia")
    let botao =  document.getElementById("botao-MostrarTodos")
    let botaoOcultar = document.getElementById("ocultar")

    adicionarpdd. style.paddingBottom = "20px"
    jogadores.style.display = "none"
    botao.style.display = "block"
    botaoOcultar.style.display ="none"
}