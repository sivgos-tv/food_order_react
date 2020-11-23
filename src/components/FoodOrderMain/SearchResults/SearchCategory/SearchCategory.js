import React, { useState } from 'react';
import styles from "./searchCategory.module.css"
const deleteFilterElement = (selected, item)=>{
    return selected.filter((e) => e !== item);
}

function SearchCategory(props) {
    const [preference, setPreference] = useState("relevance");
    const [selected, setSelected] = useState(["buffet", "1000-1500", "House Party"]);
    return(
        <div className="container">
            <div className="row">
                <form className="col" style={{display: "flex"}}>
                    {selected.map((element)=> {
                        return(
                        <button
                        className={styles.cutContent}
                        onClick={(e)=>{
                            e.preventDefault();
                            return setSelected(deleteFilterElement(selected, element))}
                        }
                        >
                        {`✕ ${element}`}
                        </button>
                    )})}
                </form>
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h4>Search By: </h4>
                            </div>
                            <div className="col">
                            <select value = {preference} 
                            onChange={(event)=>{setPreference(event.target.value)}}
                            name="arrange" id="arrange">
                            <option value="relevance">Relevance</option>
                            <option value="popularity">Popularity</option>
                            <option value="price_l2h">Price (Low to High)</option>
                            <option value="prince_h2l">Price (High to Low)</option>
                            </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SearchCategory;