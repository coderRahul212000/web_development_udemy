import { useState } from "react";

function generateGameBoard(){
     console.log("Making the initial Game Board");
     return Array(5000); 
}

export default function Dubmo(){

    const [board, setBoard] = useState(generateGameBoard);
    return (
    <button onClick = {()=> setBoard("hello")}>Click me to change state</button>
    )


}

