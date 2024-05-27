function Game() {
    this.state = 'in progress'
    this.board = new Array(9).fill('')

    this.updateBoardUI = ()=>{
        document.querySelectorAll('.card').forEach((card, index) => {
            card.textContent = this.board[index] !== '' ? this.board[index] : '';
        });
    }

    this.update = (player,move)=>{
        this.board[move] = (player===1) ? 'X' : 'O'
        this.updateBoardUI();
        const winner = this.checkWinner();
        if (winner) {
            this.state = 'end';
            alert(`${winner} wins!`);
        } else if (!this.board.includes('')) {
            this.state = 'end';
            alert('It\'s a draw!');
        }
    }

    this.checkWinner = () => {
        const board = this.board;
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    };
}

function runGame(){
    document.body.innerHTML = '<h1>Tic Tac Toe</h1><button id="x">X</button><button id="o">O</button>';
    const xButton = document.getElementById('x');
    const oButton = document.getElementById('o');
    let user = 1; 
    let computer = -user;

    const game = new Game()

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Restart';
    resetButton.addEventListener('click', function() {
        runGame();
    });
    document.body.appendChild(resetButton);

    xButton.addEventListener('click', () => {
        if (game.board.filter(item=>item==='').length !== 9){
            resetButton.click()
            return
        }
        xButton.classList.add('selected');
        oButton.classList.remove('selected');
        user = 1;
        computer = -user;
    });
    
    oButton.addEventListener('click', () => {
        if (game.board.filter(item=>item==='').length !== 9){
            resetButton.click()
            return
        }
        oButton.classList.add('selected');
        xButton.classList.remove('selected');
        user = -1;
        computer = -user;
        const computerMove = getAvailableMove(game);
        game.update(computer, computerMove);
    });

    let isComputerTurn = false;

    const grid = document.createElement('div');
    grid.classList.add('grid');
    for (let i = 0; i < 9; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = i;
        grid.appendChild(card);
        card.addEventListener('click', async function() {
            if (game.state !== 'end' && card.textContent === '' && !isComputerTurn) {
                game.update(user, parseInt(card.dataset.index));
                isComputerTurn = true
                if (game.state !== 'end') {
                    await new Promise(resolve=>setTimeout(resolve,500))
                    const computerMove = getAvailableMove(game);
                    console.log(computerMove)
                    game.update(computer, computerMove);
                    isComputerTurn = false
                }
            }
        });
    }
    document.body.appendChild(grid);

    function getAvailableMove(){
        const availbleMoves = game.board.reduce((agg,item,index)=>{
            if(item===''){agg.push(index)} 
            return agg
        },[])
        return availbleMoves[Math.floor(Math.random()*availbleMoves.length)]
    }
}

runGame();