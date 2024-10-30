const celulas = document.querySelectorAll('.celulas, .celulas_')
const t = [
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '']
]
let controlePartida = true

for (let i = 0; i < celulas.length; i++) {
    celulas[i].id = `celulas-${i}`
}

function jogadores() {
    const positionInicialPlayer = [
        ['', 'A', '', 'A', '', 'A', '', 'A'],
        ['A', '', 'A', '', 'A', '', 'A', ''],
        ['', 'A', '', 'A', '', 'A', '', 'A'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['B', '', 'B', '', 'B', '', 'B', ''],
        ['', 'B', '', 'B', '', 'B', '', 'B'],
        ['B', '', 'B', '', 'B', '', 'B', '']
    ]

    if (controlePartida) {
        for (let a = 0; a < 8; a++) {
            for (let b = 0; b < 8; b++) {
                if (positionInicialPlayer[a][b] !== '') {
                    t[a][b] = positionInicialPlayer[a][b]
                }
            }
        }
    }
    ordemTabuleiro()
}

function ordemTabuleiro() {
    let tabuleiroOrdem = t.flat()

    for (let i = 0; i < tabuleiroOrdem.length; i++) {
        const celula = document.getElementById(`celulas-${i}`)
        celula.innerHTML = ''
        if (tabuleiroOrdem[i] === 'A') {
            celula.appendChild(criarPeca(`celulas-${i}`, 'p1'))
        } else if (tabuleiroOrdem[i] === 'B') {
            celula.appendChild(criarPeca(`celulas-${i}`, 'p2'))
        }
    }
}

function criarPeca(celulaAtual, tipoPeca) {
    const peca = document.createElement('button')
    peca.style.width = '70px'
    peca.style.height = '70px'
    peca.style.borderRadius = '50%'
    peca.style.margin = '15px 0 0 0'

    peca.addEventListener('click', function () {
        selecionarPeca(celulaAtual)
    })

    if (tipoPeca === 'p1') {
        peca.style.background = 'whitesmoke'
        peca.id = 'playerBranco'
    } else if (tipoPeca === 'p2') {
        peca.style.background = 'black'
        peca.id = 'playerPreto'
    }

    return peca
}

function selecionarPeca(idAtualCelula) {
    const origemIndex = parseInt(idAtualCelula.split('-')[1])

    celulas.forEach(celula => celula.removeEventListener('click', executarMovimento))

    celulas.forEach(celula => {
        celula.addEventListener('click', function () {
            const destinoId = celula.id
            executarMovimento(origemIndex, destinoId)
        }, { once: true })
    })
}

function executarMovimento(origemIndex, destinoId) {
    const destinoIndex = parseInt(destinoId.split('-')[1])

    const origemLinha = Math.floor(origemIndex / 8)
    const origemColuna = origemIndex % 8
    const destinoLinha = Math.floor(destinoIndex / 8)
    const destinoColuna = destinoIndex % 8

    if (movimentoValido(origemLinha, origemColuna, destinoLinha, destinoColuna)) {
        t[destinoLinha][destinoColuna] = t[origemLinha][origemColuna]
        t[origemLinha][origemColuna] = ''

        const linhaPulo = (origemLinha + destinoLinha) / 2
        const colunaPulo = (origemColuna + destinoColuna) / 2

        if (Math.abs(destinoLinha - origemLinha) === 2) {
            t[linhaPulo][colunaPulo] = ''
        }

        ordemTabuleiro()
    } else {
        console.log("Movimento inválido.")
    }
}

function movimentoValido(origemLinha, origemColuna, destinoLinha, destinoColuna) {
    const peca = t[origemLinha][origemColuna]
    const movimentoDiagonalSimples = Math.abs(destinoLinha - origemLinha) === 1 && Math.abs(destinoColuna - origemColuna) === 1
    const movimentoDiagonalComer = Math.abs(destinoLinha - origemLinha) === 2 && Math.abs(destinoColuna - origemColuna) === 2
    const direcaoPermitida = (peca === 'A' && destinoLinha > origemLinha) || (peca === 'B' && destinoLinha < origemLinha)

    if (movimentoDiagonalSimples && direcaoPermitida && t[destinoLinha][destinoColuna] === '') {
        return true
    }

    if (movimentoDiagonalComer && direcaoPermitida && t[destinoLinha][destinoColuna] === '') {
        const linhaPulo = (origemLinha + destinoLinha) / 2
        const colunaPulo = (origemColuna + destinoColuna) / 2
        const pecaPulada = t[linhaPulo][colunaPulo]

        if (pecaPulada !== '' && pecaPulada !== peca) {
            return true
        }
    }

    return false
}

jogadores()
