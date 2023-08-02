// export default function Greeter(props){
//     // console.log(props.person);
//     return <h1>Hi there,{props.person}!!!</h1>;
// }


//destructing props
export default function Greeter({person="everyone", from="anonymous"}){
    // console.log(props.person);
    return (
        <>
          <h1>Hi there, {person}!!!</h1>
          <h2>--{from}</h2>
        </>
    )
}