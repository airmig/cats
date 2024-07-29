import { useEffect, useState } from "react";
import { CAT_BREED_URL } from "../util/configuration";
import CatInformation from "./CatInformation";
import Loading from "./Loading";
import Quote from "./Quote";

function Content(){

    const [catInformation, setCatInformation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () =>{
        async function getCatInformation(){
            setIsLoading(true);
            const response = await fetch(CAT_BREED_URL);
            const data = await response.json();
            setCatInformation(data);
            setIsLoading(false);
        }
        getCatInformation();
    }, []);

    return <>
    <div className="mainContent">
        <div className="one">
            <p>This page is a simple react webapp written to demonstrate basic React 
            Functionality. Two APIs are used to retrieve cat information, cat image 
            and random cat fact. <a target="_blank" href="https://github.com/wh-iterabb-it/meowfacts">The meowfacts API</a> and <a target="_blank" href="https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t">TheCatAPI</a> are used.
            </p>
            <p>Start by selecting a breed from the drop down menu.</p>
        </div>

        { isLoading && <Loading/> }
        
        { !isLoading && <CatInformation catInformation={catInformation}/> }
        
        { !isLoading && <Quote/>}
    </div>
    </>
}
export default Content;