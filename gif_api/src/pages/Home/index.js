import {useState} from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from '../../components/ListOfGifs'
import useGifs from '../../hooks/useGifs'
export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const {loading, gifs} = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={keyword} />
            </form>
            <h2>Última búsqueda</h2>
            <ListOfGifs gifs={gifs}/>
        </>
    )
}