import Square from './Square';
import { useState } from 'react';

const winningConditions=[
    [0,4,8],[6,4,2],
    [1,4,7],[3,4,5],
    [0,1,2],[2,5,8],
    [6,7,8],[0,3,6]
];

export default function Board({player,squares,isWinnerSelected,setIsWinnerSelected,onPlay}){


function isEqual(arr,squares){
    const a = squares[arr[0]]
    const b = squares[arr[1]]
    const c = squares[arr[2]]

    return (a!=null && a===b && b===c);
}

function isWinnerFound(squares){
    for(let i=0;i<winningConditions.length;i++){
        if(isEqual(winningConditions[i],squares))
            return winningConditions[i];
        }

    return false;
}

function checkWinningRow(i){
    return isWinnerSelected && isWinnerSelected.includes(i)
}

function onSquareClickHandler(i){
    if(isWinnerSelected || squares[i]) return;

    let copy = [...squares];
    copy[i]= player == 0 ? 'O' : 'X';

    onPlay(copy);
    let winner = isWinnerFound(copy)

    if(winner){
        setIsWinnerSelected(winner);
    }
}

    return (
    <div className='board'>
    <div className='board-row'>
        <Square isWiningRow={checkWinningRow(0)} value={squares[0]} onSquareClick={() => onSquareClickHandler(0)}/>
        <Square isWiningRow={checkWinningRow(1)} value={squares[1]} onSquareClick={() => onSquareClickHandler(1)}/>
        <Square isWiningRow={checkWinningRow(2)} value={squares[2]} onSquareClick={() => onSquareClickHandler(2)}/>
    </div>
    <div className='board-row'>
        <Square isWiningRow={checkWinningRow(3)} value={squares[3]} onSquareClick={() => onSquareClickHandler(3)}/>
        <Square isWiningRow={checkWinningRow(4)} value={squares[4]} onSquareClick={() => onSquareClickHandler(4)}/>
        <Square isWiningRow={checkWinningRow(5)} value={squares[5]} onSquareClick={() => onSquareClickHandler(5)}/>
    </div>
    <div className='board-row'>
        <Square isWiningRow={checkWinningRow(6)} value={squares[6]} onSquareClick={() => onSquareClickHandler(6)}/>
        <Square isWiningRow={checkWinningRow(7)} value={squares[7]} onSquareClick={() => onSquareClickHandler(7)}/>
        <Square isWiningRow={checkWinningRow(8)} value={squares[8]} onSquareClick={() => onSquareClickHandler(8)}/>
    </div>
    </div>)
}