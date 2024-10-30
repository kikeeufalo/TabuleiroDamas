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
];

let controlePartida = true;

for (let i = 0; i < celulas.length; i++) {
    celulas[i].id = `celulas-${i}`;
}

function moveJogador(idCelula) {
    const celulaAtual = document.getElementById(idCelula);
    console.log(t)
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
    ];

    if (controlePartida) {
        for (let a = 0; a < 8; a++) {
            for (let b = 0; b < 8; b++) {
                if (positionInicialPlayer[a][b] !== '') {
                    t[a][b] = positionInicialPlayer[a][b];
                }
            }
        }
    }

    console.log(t);
    ordemTabuleiro();
}

function ordemTabuleiro() {
    let tabuleiroOrdem = t[0].concat(t[1], t[2], t[3], t[4], t[5], t[6], t[7]);

    for (let i = 0; i < tabuleiroOrdem.length; i++) {
        const playerUmId = document.getElementById(`celulas-${i}`);
        
        // Limpa o conteúdo anterior da célula
        playerUmId.innerHTML = '';

        if (tabuleiroOrdem[i] === 'A') {
            playerUmId.appendChild(playerUm(`celulas-${i}`, 'p1'));
        } else if (tabuleiroOrdem[i] === 'B') {
            playerUmId.appendChild(playerUm(`celulas-${i}`, 'p2'));
        }
    }
}

function playerUm(idCelula, tipo) {
    const buttonPlayer = document.createElement('button');

    buttonPlayer.style.width = '70px';
    buttonPlayer.style.height = '70px';
    buttonPlayer.style.borderRadius = '50%';
    buttonPlayer.style.margin = '15px 0 0 0';

    // Passa o ID da célula ao invés do próprio botão
    buttonPlayer.addEventListener('click', function() {
        moveJogador(idCelula);
    });

    if (tipo === 'p1') {
        buttonPlayer.style.background = 'whitesmoke';
    } else if (tipo === 'p2') {
        buttonPlayer.style.background = 'black';
    }

    return buttonPlayer;
}

jogadores();
