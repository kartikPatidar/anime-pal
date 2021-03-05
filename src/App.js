import { useEffect, useState } from "react";
import axios from 'axios';

function App() {

  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  let baseURL = "https://kitsu.io/api/edge";
  let myURL = `${baseURL}/anime?filter[text]=${searchQuery}`;

  // useEffect(() => {
  //   axios.get(myURL, {
  //     headers: {
  //       'Accept': 'application/vnd.api+json',
  //       'Content-Type': 'application/vnd.api+json'
  //     }
  //   }).then((response) => console.log(response))
  // }, [myURL])

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
      {searchQuery}
    </div>
  );
}

export default App;
