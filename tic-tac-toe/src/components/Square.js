import {useState} from 'react';

export default function Square({value, isWiningRow, onSquareClick}){
    
    return (
        <button className={`square ${isWiningRow ? 'winner-row' : ''}` } onClick={onSquareClick}>{value}</button>
    )
}