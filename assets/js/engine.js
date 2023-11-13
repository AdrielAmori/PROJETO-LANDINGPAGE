let setaDireita = window.document.getElementById("seta-direita")
let setaEsquerda = window.document.getElementById("seta-esquerda")
let leonardo = window.document.getElementById("leonardo")
let samantha = window.document.getElementById("samantha")
let bruna = window.document.getElementById("bruna")

function RolarParaDireita() {
    leonardo.style = "display:none";
    bruna.style = "display:flex";
    setaDireita.style = "display:none";
    setaEsquerda.style = "display:flex; margin-top: 50px"
}


function RolarParaEsquerda() {
    samantha.style = "display:flex";
    bruna.style = "display:none"
    leonardo.style = "display:flex";
    setaDireita.style = "display:flex; margin-top: 50px";
    setaEsquerda.style = "display:none"
}

