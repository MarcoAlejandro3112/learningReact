export default function Gif({id, title, url}){

    return (
        <div>
            <h4>{title}</h4>
            <img src={url} alt={title}/>
        </div>
    );
}