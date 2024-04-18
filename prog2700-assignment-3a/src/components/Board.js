import React from 'react';
import Square from './Square';
import { calculateWinner, isDraw } from './gameUtils';

function Board({ xIsNext, squares, onPlay }) {
    // Calculate the winner and the winning line
    const { winner, winningLine } = calculateWinner(squares);

    // Determine the game status
    const draw = isDraw(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else if (draw) {
        status = 'Game Result: Draw';
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    // Helper function to check if a square is part of the winning line
    function isWinningSquare(index) {
        return winningLine && winningLine.includes(index);
    }

    // Handle a click on a square
    function handleClick(i) {
        if (winner || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    // Render the board with the winning squares highlighted
    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square
                    value={squares[0]}
                    onSquareClick={() => handleClick(0)}
                    isWinning={isWinningSquare(0)}
                />
                <Square
                    value={squares[1]}
                    onSquareClick={() => handleClick(1)}
                    isWinning={isWinningSquare(1)}
                />
                <Square
                    value={squares[2]}
                    onSquareClick={() => handleClick(2)}
                    isWinning={isWinningSquare(2)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={squares[3]}
                    onSquareClick={() => handleClick(3)}
                    isWinning={isWinningSquare(3)}
                />
                <Square
                    value={squares[4]}
                    onSquareClick={() => handleClick(4)}
                    isWinning={isWinningSquare(4)}
                />
                <Square
                    value={squares[5]}
                    onSquareClick={() => handleClick(5)}
                    isWinning={isWinningSquare(5)}
                />
            </div>
            <div className="board-row">
                <Square
                    value={squares[6]}
                    onSquareClick={() => handleClick(6)}
                    isWinning={isWinningSquare(6)}
                />
                <Square
                    value={squares[7]}
                    onSquareClick={() => handleClick(7)}
                    isWinning={isWinningSquare(7)}
                />
                <Square
                    value={squares[8]}
                    onSquareClick={() => handleClick(8)}
                    isWinning={isWinningSquare(8)}
                />
            </div>
        </>
    );
}

export default Board;
