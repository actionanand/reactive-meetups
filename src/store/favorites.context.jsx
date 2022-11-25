import { createContext, useState } from 'react';

const FavoriteContext = createContext({
  favorites: [],
  toatalfav: 0,
  addfav: m => {},
  removeFav: id => {},
  isItemFav: id => {}
});

export function FavoriteContextProvider({children}) {
  const [userFav, setUserfav] = useState([]);

  const context = {
    favorites: userFav,
    toatalfav: userFav.length,
    addfav: addFavHandler,
    removeFav: removeFavHandler,
    isItemFav: isItemFavHandler
  };

  function addFavHandler(favMeetup) {
    setUserfav(prevState => {
      return prevState.concat(favMeetup);
    });
  }

  function removeFavHandler(meetupId) {
    setUserfav(prevState => {
      return prevState.filter(meetup => meetupId !== meetup.id);
    });
  }

  function isItemFavHandler(meetupId) {
    return userFav.some(meetup => meetupId !== meetup.id);
  }

  return <FavoriteContext.Provider value={context}>
    {children}
  </FavoriteContext.Provider>;
}

export default FavoriteContext;