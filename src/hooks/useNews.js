import React, { useEffect, useState } from 'react';
import axios from 'axios'



const useNews = (category='technology') => {
    //Set state that will be returned
    const [newsArr, setNewsArr] = useState([])

    //Get JSON from API when category is uptdated
    useEffect(()=>{
        const callAPI = async ()=>{
            const URL = `https://newsapi.org/v2/top-headlines?country=mx&apiKey=f7f55895f6544b0ca6dc17b3b08b97c1&category=${category}`
            try {
                const response = await axios.get(URL)
                setNewsArr(response.data.articles)
            }
            catch (err){
                console.log(err)
            }
        }
        callAPI()
    },[category])

    return newsArr
}

export default useNews;