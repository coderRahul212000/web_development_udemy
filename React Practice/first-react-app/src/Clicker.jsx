// export default function Clicker({ buttonText, message }){
//     return <button onClick={() => alert(message)}> {buttonText} </button>;
// }


export default function Clicker({ buttonText, message }){
    const handleClick = () => { alert(message)};
    return <button onClick={handleClick}>{buttonText} </button>;
}