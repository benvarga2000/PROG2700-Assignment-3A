
export default function MoveCounter({ history, currentMove }) {
    // Initialize move counts for each player
    let xMoves = 0;
    let oMoves = 0;

    xMoves = currentMove / 2;
    oMoves = xMoves;
    if ((currentMove % 2 > 0)) {    // check if odd number
        xMoves = Math.trunc(++xMoves);  // if currentMove === odd then X should be one more than o
        oMoves = Math.trunc(oMoves);
    } 

    // Render the move counts for both players
    return (
        <div className="move-counter">
            <p>Moves made by X: {xMoves}</p>
            <p>Moves made by O: {oMoves}</p>
        </div>
    );
}
