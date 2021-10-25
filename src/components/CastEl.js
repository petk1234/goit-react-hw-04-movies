export default function CastEl({ casts }){
    return(
        <>
        {casts.map( cast =>(
            <ul key={cast.cast_id}>
                <li>
                    <img src={`https://image.tmdb.org/t/p/original${cast.profile_path}`} alt={cast.name} width='150' height='200'></img>
                    <p>{cast.name}</p>
                    <p>Character: {cast.character}</p>
                </li>
            </ul>
        ))}
        </>
    )
}