export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    
    // Iterate through each winning line
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        // Check if the line has the same non-null value across all squares
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            // Return the winner and the winning line indices
            return {
                winner: squares[a],
                winningLine: [a, b, c]
            };
        }
    }
    // Return null if there's no winner
    return {
        winner: null,
        winningLine: []
    };
}

export function isDraw(squares) {
    // Check if all squares are filled
    const isBoardFull = squares.every(square => square !== null);
    // Calculate the winner
    const { winner } = calculateWinner(squares);
    // The game is a draw if the board is full and there is no winner
    return isBoardFull && !winner;
}
