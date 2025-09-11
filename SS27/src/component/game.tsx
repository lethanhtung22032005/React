import React, { useState, useEffect } from "react";
import "./game.css";

type Cell = {
    revealed: boolean;
    hasMine: boolean;
    flagged: boolean;
    adjacent: number;
};

const createBoard = (rows: number, cols: number, mines: number): Cell[][] => {
    const board: Cell[][] = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => ({
            revealed: false,
            hasMine: false,
            flagged: false,
            adjacent: 0,
        }))
    );

    let placed = 0;
    while (placed < mines) {
        const r = Math.floor(Math.random() * rows);
        const c = Math.floor(Math.random() * cols);
        if (!board[r][c].hasMine) {
            board[r][c].hasMine = true;
            placed++;
        }
    }

    const dirs = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c].hasMine) continue;
            let cnt = 0;
            for (const [dr, dc] of dirs) {
                const nr = r + dr,
                    nc = c + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && board[nr][nc].hasMine) {
                    cnt++;
                }
            }
            board[r][c].adjacent = cnt;
        }
    }
    return board;
};

const CellButton: React.FC<{
    cell: Cell;
    onClick: () => void;
    onRightClick: (e: React.MouseEvent) => void;
}> = ({ cell, onClick, onRightClick }) => {
    let text = "";
    if (cell.revealed) {
        if (cell.hasMine) text = "💣";
        else if (cell.adjacent > 0) text = String(cell.adjacent);
    } else if (cell.flagged) {
        text = "🚩";
    }
    return (
        <button className={`cell ${cell.revealed ? "revealed" : ""}`} onClick={onClick} onContextMenu={onRightClick}>
            {text}
        </button>
    );
};

const Minesweeper: React.FC = () => {
    const [rows] = useState(9);
    const [cols] = useState(9);
    const [mines] = useState(10);
    const [board, setBoard] = useState<Cell[][]>([]);
    const [gameOver, setGameOver] = useState(false);
    const [win, setWin] = useState(false);

    useEffect(() => {
        setBoard(createBoard(rows, cols, mines));
    }, [rows, cols, mines]);

    const reveal = (r: number, c: number, newBoard: Cell[][]) => {
        const cell = newBoard[r][c];
        if (cell.revealed || cell.flagged) return;
        cell.revealed = true;
        if (cell.adjacent === 0 && !cell.hasMine) {
            const dirs = [
                [-1, -1],
                [-1, 0],
                [-1, 1],
                [0, -1],
                [0, 1],
                [1, -1],
                [1, 0],
                [1, 1],
            ];
            for (const [dr, dc] of dirs) {
                const nr = r + dr,
                    nc = c + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                    reveal(nr, nc, newBoard);
                }
            }
        }
    };

    const handleClick = (r: number, c: number) => {
        if (gameOver || win) return;
        const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));
        const cell = newBoard[r][c];
        if (cell.flagged) return;
        if (cell.hasMine) {
            cell.revealed = true;
            setBoard(newBoard);
            setGameOver(true);
            return;
        }
        reveal(r, c, newBoard);
        setBoard(newBoard);

        const safeCells = rows * cols - mines;
        const revealedCount = newBoard.flat().filter((c) => c.revealed && !c.hasMine).length;
        if (revealedCount === safeCells) setWin(true);
    };

    const handleRightClick = (r: number, c: number, e: React.MouseEvent) => {
        e.preventDefault();
        if (gameOver || win) return;
        const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));
        const cell = newBoard[r][c];
        if (!cell.revealed) {
            cell.flagged = !cell.flagged;
            setBoard(newBoard);
        }
    };

    const reset = () => {
        setBoard(createBoard(rows, cols, mines));
        setGameOver(false);
        setWin(false);
    };

    return (
        <div className="game">
            <h1>Dò Mìn (Minesweeper)</h1>
            <div className="board" style={{ gridTemplateColumns: `repeat(${cols}, 40px)` }}>
                {board.map((row, r) =>
                    row.map((cell, c) => (
                        <CellButton
                            key={`${r}-${c}`}
                            cell={cell}
                            onClick={() => handleClick(r, c)}
                            onRightClick={(e) => handleRightClick(r, c, e)}
                        />
                    ))
                )}
            </div>
            {gameOver && <div className="status lose">💥 Thua rồi!</div>}
            {win && <div className="status win">🎉 Bạn thắng!</div>}
            <button className="reset" onClick={reset}>
                Chơi lại
            </button>
        </div>
    );
};

export default Minesweeper;
