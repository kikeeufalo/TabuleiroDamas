const celulas = document.querySelectorAll('.celulas, .celulas_');

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
}

jogadores()