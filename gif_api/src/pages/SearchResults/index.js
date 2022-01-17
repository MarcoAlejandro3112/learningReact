import ListOfGifs from '../../components/ListOfGifs'
import useGifs from '../../hooks/useGifs'
export default function SearchResults({params}){
    const {keyword} = params
    const {loading, gifs} = useGifs({keyword})

    return(
        <div>
            {
            //Este parrafo deberia cargar igual que la lista de gifs revisar eso en el futuro
            }
            <p>Se encontraron 10 resultados con la búsqueda "{keyword}"</p>
            {loading ? <p>loading...</p> : <ListOfGifs gifs={gifs}/> }
        </div>
    )
}