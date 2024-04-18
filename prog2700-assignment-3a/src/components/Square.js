export default function Square({ value, onSquareClick, isWinning }) {
    // Define the style for the square, applying the yellow background if it's part of the winning line
    const squareStyle = {
        backgroundColor: isWinning ? 'yellow' : 'white'
    };
    
    // Render the square with the appropriate style
    return (
        <button className="square" onClick={onSquareClick} style={squareStyle}>
            {value}
        </button>
    );
}
