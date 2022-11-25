import { useContext } from 'react';

import FavoriteContext from '../store/favorites.context';
import MeetupList from '../components/meetups/MeetupList/MeetupList';

const FavoritesPage = () => {
  const favCtx = useContext(FavoriteContext);

  let favJsx;

  if(favCtx.toatalfav === 0) {
    favJsx = <p> You've no favorites yet. </p>;
  } else {
    favJsx = <MeetupList meetups={favCtx.favorites} />;
  }

  return <section>
    <h1> My Favorites </h1>
    {favJsx}
  </section>;
}

export default FavoritesPage;