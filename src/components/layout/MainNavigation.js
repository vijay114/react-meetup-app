import { Link } from "react-router-dom"
import classes from "./MainNavigation.module.css"
import {useContext} from "react";
import FavouritesContext from "../../store/favourites-context";

function MainNavigation() {

    const favouriteContext = useContext(FavouritesContext);


    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/'}>All Meetups</Link>
                    </li>
                    <li>
                        <Link to={'/new-meetups'}>Add New Meetups</Link>
                    </li>
                    <li>
                        <Link to={'/favourites'}>
                            My Favourites
                            <span className={classes.badge}>{favouriteContext.totalFavourites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;