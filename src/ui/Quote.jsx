import { useContext, useEffect, useState } from "react";
import { CAT_FACT_URL } from "../util/configuration";
import CatInformationContext from "../util/context";

function Quote(){
    const [quote, setQuote] = useState("");
    const {selectedCat, setSelectedCat} = useContext(CatInformationContext);

    async function getQuote(){
        const response = await fetch(CAT_FACT_URL);
        const data = await response.json();
        setQuote(data);
    }
    useEffect(()=>{
        getQuote();
    },[selectedCat]);
    return <div className="five">
        <button className="meowButton" onClick={getQuote}>MEOW</button><br/>
        "{quote.data}"
    <br/>
    <div className="meow"><a target="_blank" href="https://github.com/wh-iterabb-it/meowfacts">The meowfacts API</a></div>
    </div>;
}
export default Quote;