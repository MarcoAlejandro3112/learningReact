import { Link } from "wouter";
export default function Gif({id, title, url}){

    return (
        <div>
            <Link to={`/gif/${id}`} className='Gif-link'>
                <h4>{title}</h4>
                <img src={url} alt={title}/>
            </Link>
        </div>
    );
}