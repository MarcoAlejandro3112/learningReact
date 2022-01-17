import {useState, useEffect} from 'react'
import getGifs from '../services/getGifs'

export default function useGifs({keyword} = {keyword: null}){
const [gifs, setGifs] = useState([])
const[loading,setLoading] = useState()

    useEffect(function() {
        setLoading(true)
        
        const keywordToUse = keyword || localStorage.getItem('lastKeyword')

        getGifs({ keyword:keywordToUse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                localStorage.setItem('lastKeyword',keyword)
            })
    }, [keyword])

    return {loading, gifs}
}
