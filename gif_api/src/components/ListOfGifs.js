import {useState, useEffect} from 'react'
import Gif from "./Gif"
import getGifs from '../services/getGifs'
export default function ListOfGifs({params}){
    const {keyword} = params
    const [gifs, setGifs] = useState([])

    const[loading,setLoading] = useState()

    useEffect(function() {
        setLoading(true)
        getGifs({ keyword })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    }, [keyword])

    if(loading) return <p>Loading...</p>

    return(
        <div>
            {
                gifs.map(({id, title, url}) => 
                    <Gif 
                        id={id}
                        key={id}
                        title={title}
                        url={url}
                    />
                )
            }
        </div>
    )
}