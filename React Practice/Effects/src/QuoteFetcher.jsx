import { useState , useEffect} from "react";
const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {

    //here our usestate don't wait for promise to get completed and return value promise no initial state will be set
    // const [quote, setQuote] = useState({ async function (){
    //     const response =  await fetch(RANDOM_QUOTE_URL);
    //     const jsonResponse = await response.json();
    //     const randomQuote = jsonResponse.quote;
    //     return randomQuote;
    //    }
        
    // })

    // useEffect(() => {
    //     async function getInitialQuote(){
    //         const response = await fetch(RANDOM_QUOTE_URL);
    //         const jsonResponse = await response.json();
    //         const randomQuote = jsonResponse.quote;
    //         setQuote(randomQuote);
    //     }
    //     getInitialQuote();         
    // }, [])

    const [quote, setQuote] = useState({text: "", author: ""});

    useEffect(() => {
            fetchQuote();     
        }, [])


    async function fetchQuote(){
      const response =  await fetch(RANDOM_QUOTE_URL);
      const jsonResponse = await response.json();
      const randomQuote = jsonResponse.quote;
      setQuote(randomQuote)
     }

    return (
        <div>
            <button onClick={fetchQuote}>Get Quote Using handler</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    )
    
}