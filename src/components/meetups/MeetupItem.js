import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import {useContext} from "react";
import FavouritesContext from "../../store/favourites-context";

function MeetupItem(props) {

    const favouriteContext = useContext(FavouritesContext);

    const isItemFavourite = favouriteContext.itemIsFavourite(props.id)


    function toggleFavouriteStatusHandler() {
        if (isItemFavourite) {
            favouriteContext.removeFavourite(props.id);
        } else {
            favouriteContext.addFavourite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            })
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button
                        onClick={toggleFavouriteStatusHandler}>
                        {isItemFavourite ? 'Remove from Favourites' : 'To Favourites'}
                    </button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;
