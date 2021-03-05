import { useEffect, useState } from "react";
import axios from 'axios'
import SearchResult from './SearchResults';

function App() {

  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [animeDetails, setAnimeDetails] = useState([]);

  let baseURL = "https://kitsu.io/api/edge";
  let myURL = `${baseURL}/anime?filter[text]=${searchQuery}`;

  useEffect(() => {
    if (searchQuery === '') {
      return
    }
    console.log(myURL);
    axios.get(myURL, {
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json'
      }
    }).then((response) => {
      setAnimeDetails(response.data.data);
      // console.log(animeDetails);
      console.log(response.data.data);
    })
  }, [myURL, searchQuery]);

  function handelChange(e) {
    setQuery(e.target.value);
  }

  function handelSubmit(e) {
    e.preventDefault();
    setSearchQuery(query);
  }

  return (
    <div>
      <form onSubmit={handelSubmit.bind(this)}>
        <input type="text" onChange={handelChange.bind(this)} />
        <button>Search</button>
      </form>
      <br />
      <SearchResult listOfAnimes={animeDetails} />
    </div>
  );
}

export default App;
