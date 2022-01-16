import {API_URL,API_KEY} from './settings'
export default function getGifs({keyword}){
    const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=G&lang=en`

    return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
        const {data = []} = response
            const gifs = data.map(image => {
                const {images, title, id} = image 
                const { url } = images.downsized_medium
                return { title, id, url}
            })
            return gifs
    })
}