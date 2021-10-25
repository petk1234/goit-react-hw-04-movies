import { Link } from "react-router-dom";

export default function HomePageInsertUl({ trends, url }){
    return(
        <ul>
            {trends.map( trend =>(
                <li key={trend.id}>
                  <Link to={`${url}movies/${trend.id}`}>{trend.original_name ? trend.original_name : trend.title}</Link>
                </li>
            ))}
        </ul>
    )
}