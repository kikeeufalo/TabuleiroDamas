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
    celulas[i].id = `celulas-id-${i}`
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
                if (positionInicialPlayer[a][b] === 'A') {
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

    for(let i = 0; i < tabuleiroOrdem.length; i++) {
        

    }
}

function playerUm(id) {
    const buttonPlayer = document.createElement('button')
    const celulaIdParametro = document.getElementById(`${id}`)

    buttonPlayer.style.width = '50px'
    buttonPlayer.style.height = '50px'
    buttonPlayer.style.borderRadius = '50%'

    celulaIdParametro.appendChild(buttonPlayer)
}

jogadores()