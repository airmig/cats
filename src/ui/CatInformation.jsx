import { CAT_IMAGE_URL } from "../util/configuration";
import { useContext, useState } from "react";
import CatInformationContext from "../util/context";

function CatInformation({catInformation}){
    const {selectedCat, setSelectedCat} = useContext(CatInformationContext);
    const [catImageUrl, setCatImageUrl] = useState({});
    let isEmpty = Object.keys(selectedCat).length === 0;

    async function getImage(selectedId) {
        const loadingImage = {url: '/loading.gif'};
        setCatImageUrl(loadingImage);
        const response = await fetch(CAT_IMAGE_URL+selectedId);
        const data = await response.json();
        setCatImageUrl(data[0]);
    }

    function setSelectedValue(id){
        const element = document.getElementById('catOptions');
        const selectedId = element[id].id;
        const foundElement = catInformation.find(item => item.id === selectedId);
        if (foundElement === undefined){
            setSelectedCat({});
        }
        else {
            setSelectedCat(foundElement);
        }
        getImage(selectedId);
    }

    return <>
        <div className="three"><select id="catOptions" onChange={(e) => setSelectedValue(e.target.selectedIndex)}>
           <option id="z">Select a Breed</option>
           { catInformation.map((cat)=>(<option key={cat.id} id={cat.id}>{cat.name}</option>))}
           </select></div> 
       
       { !isEmpty && <div className="four">
           <table cellPadding="0" cellSpacing="0" className="catInformationTable">
               <thead>
                   <tr>
                       <td colSpan="2">{selectedCat.name}</td>
                   </tr>
               </thead>
               <tbody>
               <tr>
                       <td>
                           This cat is originally from {selectedCat.origin}. {selectedCat.description}. The temperaments are: {selectedCat.temperament}.
                           <ul>
                               {selectedCat.cfa_url && <li><a target="_blank" href={selectedCat.cfa_url}>{selectedCat.cfa_url}</a></li>}
                               {selectedCat.wikipedia_url && <li><a target="_blank" href={selectedCat.wikipedia_url}>{selectedCat.wikipedia_url}</a></li>}
                           </ul>
                       </td>
                       <td>
                           <img className="catImage" src={catImageUrl.url} border="0"/>
                       </td>
                   </tr>
               </tbody>
           </table>
           </div>}
           </>
}

export default CatInformation;