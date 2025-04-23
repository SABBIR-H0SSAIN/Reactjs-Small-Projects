import Board from "./Board"
import {useState} from "react"

export default function TicTacToe(){

    const [player,setPlayer]  = useState(0);
    const [history,setHistory] = useState([Array(9).fill(null)]);
    const [isWinnerSelected,setIsWinnerSelected] = useState(false);
  
    function reset(){
        setHistory([Array(9).fill(null)]);
        setPlayer(0);
        setIsWinnerSelected(false);
    }
    
     
    function undo(){
        let copy = [...history]
        if(copy.length > 1){
            copy.pop()
            setHistory(copy)
            setPlayer(prevPlayer => 1-prevPlayer)
            setIsWinnerSelected(false)
        }
    }


    function handlePlay(nextMove){
        setHistory(prevHistory => [...prevHistory,nextMove]);
        setPlayer(prevPlayer => 1-prevPlayer)
    }

    const decodePlayer = (currentPlayer) => currentPlayer === 0 ? 'O' : 'X';

    return (
        <div className="game">
            <div className="game-board">
                <Board 
                player = {player}
                isWinnerSelected={isWinnerSelected}
                setIsWinnerSelected={setIsWinnerSelected}
                squares={[...history[history.length-1]]} 
                onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <br/>
                <div style={{justifyContent:"center"}} className="turn">{isWinnerSelected ? `🏆 Player '${decodePlayer(1-player)}' won the game` : `Now playing: ${decodePlayer(player)}`}</div>
                <br/>
                <button style={{marginRight:"10px"}} onClick={reset}>🔄️ Reset</button>
                <button onClick={undo}>↪️ Undo</button>
            </div>
        </div>
    )
}