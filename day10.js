// the API file for img gallary app using react

import { useState, useEffect } from "react";
import axios from "axios";
const count = 1;
function LoadImages() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
        .get("https://api.unsplash.com/photos?client_id=s9V9PZNYsJ96r1VeacrJRc8Bt9j9Ta1yDm-r-ZSTxkQ")
        .then((data) =>  {
        setState(data.data)
    })
  }, [count])

return state;  
}

function SearchImages(query) {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
        .get("https://api.unsplash.com/search/photos?query="+query+"&client_id=s9V9PZNYsJ96r1VeacrJRc8Bt9j9Ta1yDm-r-ZSTxkQ")
        .then((data) =>  {
        setState(data.data.results)
    })
  }, [query])

return state;  
}

export {LoadImages, SearchImages}