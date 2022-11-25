import { useContext } from 'react';

import classes from './MeetupItem.module.css';
import Card from '../../ui/Card/Card';
import FavoriteContext from '../../../store/favorites.context';

function MeetupItem({ meetupData: { image, title, address, id, description: desc } }) {
  const favCtx = useContext(FavoriteContext);

  const isItemFav = favCtx.isItemFav(id);

  const toggleFavStatus = () => {
    if(isItemFav) {
      favCtx.removeFav(id);
    } else {
      favCtx.addfav({
        id,
        image,
        address,
        title,
        description: desc
      });
    }
  }

  return <li className={classes.item} >
    <Card>
      <div className={classes.image} >
        <img src={image} alt={title} />
      </div>
      <div className={classes.content} >
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{desc}</p>
      </div>
      <div className={classes.actions} >
        <button onClick={toggleFavStatus}>
          {isItemFav ? 'Remove Favorite' : 'To Favorite'}
        </button>
      </div>
    </Card>
  </li>;
}

export default MeetupItem;