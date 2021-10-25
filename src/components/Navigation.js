import react from "react";
import { Link } from 'react-router-dom';
import routes from "../routes";
export default function Navigation(){
    return(
        <ul>
            <li>
              <Link to={routes.home}>Home page</Link>
            </li>
            <li>
              <Link to={routes.movies}>Movies</Link>
            </li>
        </ul>
    )
}