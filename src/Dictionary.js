import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded]= useState(false);
  let [photos, setPhotos]= useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response){
    setPhotos(response.data.photos);
  }
  function search(event) {
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey="563492ad6f917000010000018043bdf298804957a9a70c81a44637cf";
    let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
let headers= {Authoriztion:`Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, {headers:headers}).then(handlePexelsResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
function load(){
  setLoaded(true);
  search();
}

if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, wine, yoga, plant...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
