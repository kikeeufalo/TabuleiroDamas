const tabuleiro = window.document.querySelector("#tabuleiro div")

if (tabuleiro) {
    const celulas = Array.from(tabuleiro).slice(0 , 63)

    console.log(celulas)
}