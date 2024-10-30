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

function moveJogador(idAtualCelula) {
    console.log(idAtualCelula)
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



    console.log(t)
    ordemTabuleiro()
}

function ordemTabuleiro() {
    let tabuleiroOrdem = t[0].concat(t[1],t[2],t[3],t[4],t[5],t[6],t[7])

    for (let i = 0; i < tabuleiroOrdem.length; i++) {
        if (tabuleiroOrdem[i] === 'A') {
            let playerUmId = window.document.getElementById(`celulas-${i}`)
            playerUmId.appendChild(player(`celulas-${i}`, 'p1'))
        }else if (tabuleiroOrdem[i] === 'B') {
            let playerUmId = window.document.getElementById(`celulas-${i}`)
            playerUmId.appendChild(player(`celulas-${i}`, 'p2'))
        }
    }
}

function player(celulaAtual, button) {
    const buttonPlayer = document.createElement('button')

    buttonPlayer.style.width = '70px'
    buttonPlayer.style.height = '70px'
    buttonPlayer.style.borderRadius = '50%'
    buttonPlayer.style.margin = '15px 0 0 0'

    buttonPlayer.addEventListener('click', function() {
        moveJogador(celulaAtual)
    })

    if (button === 'p1') {
        buttonPlayer.style.background = 'whitesmoke'
        buttonPlayer.id = 'playerBranco'
    }else if (button === 'p2') {
        buttonPlayer.style.background = 'black'
        buttonPlayer.id = 'playerPreto'
    }

    return buttonPlayer
}