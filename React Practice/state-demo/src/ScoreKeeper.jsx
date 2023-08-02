import { useState } from "react";

export default function ScoreKeeper({numPlayers= 3, target = 5}){
  
const [scores , setScores] = useState(new Array(numPlayers).fill(0))

//Method 1 to change to score by making a copy
// const incrementScore = (idx) => {
//     setScores(prevScore => {
//         const copy = [...prevScore];
//         copy[idx] +=1;
//         return copy;
//     })
// }



//Method 2 :- The reacty way which is using map

const incrementScore = (idx) => {
    setScores((prevScores) => {
         return prevScores.map((score, i) => {
            if(i === idx) return score + 1;
            return score;
         })
    });
}

const reset = () => {
    setScores(new Array(numPlayers).fill(0))
}


  return ( 
     <div>
        <h1>Score Keeper</h1>
        <ul>
            {scores.map((score,idx)=>{
                return (
                   <li key ={idx}>
                    Player{idx+1}: {score}
                    <button onClick={()=> incrementScore(idx)}>+1</button>
                    { score >= target && "Winner!!!"} 
                    </li>
                )
            })}
        </ul>
        <button onClick={reset}>Reset</button>

     </div>
  )
}