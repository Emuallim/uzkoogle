import { useState, useEffect } from 'react'
import API_KEY from "./keys";

const CONTEXT_KEY = "134bf04afc69804f1";
// this tells google which search engine to use
// in our case, it's the entire web

//whenever we use this custom hook, its gonna fire off the uesEffect
const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // whenver the term changes, fire off the code in here
    // we need to do an Async Fetch
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then(response => response.json())
        .then(result => {
          setData(result)
        })
    }

    fetchData();

  }, [term])

  return { data }
}

export default useGoogleSearch
