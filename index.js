var setadireita     = window.document.getElementById ("seta-direita")
var suporte         = window.document.getElementById ("suporte")
var planejamento    = window.document.getElementById ("planejamento")
var desenvolvimento = window.document.getElementById ("desenvolvimento")
var setaesquerda    = window.document.getElementById ("seta-esquerda")

function rolarparadireita() {
    suporte.style         = "display:none"
    desenvolvimento.style = "display:flex"
    setadireita.style     = "display:none"
    setaesquerda.style    = "display:flex; margin-top:65px"
}

function rolarparaesquerda () {
    suporte.style         = "display: flex"
    desenvolvimento.style = "display: none"
    setadireita.style     = "display: flex; margin-top: 65px"
    setaesquerda.style    = "display: none"
}