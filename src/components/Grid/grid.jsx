import { useState } from "react";
import Card from "../Card/card";
import './grid.css'

function Grid({numberOfCards}){
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    
    return(
        <div className="grid">
            {board.map((ele, idx) => <Card key={idx}/>)}


        </div>
    
        )
}

export default Grid;