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
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey="563492ad6f917000010000018043bdf298804957a9a70c81a44637cf";
    let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
let headers= {Authoriztion:`Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, {headers:headers}).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
function load(){
  setLoaded(true);
  search();
}
if (loaded){
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
  }
  else {
    load();
    return "Loading";
  }
}