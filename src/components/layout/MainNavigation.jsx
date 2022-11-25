import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import FavoriteContext from '../../store/favorites.context';

function MainNavigation() {
  const favCtx = useContext(FavoriteContext);

  let badgeJsx;

  badgeJsx = !favCtx.toatalfav ? '' 
    : badgeJsx = <span className={classes.badge}>{favCtx.toatalfav }</span>;


  return <header className={classes.header} >
    <div className={classes.logo} > Meetups </div>
    <nav>
      <ul>
        <li>
          <Link to='/'> All Meetups </Link>
        </li>
        <li>
          <Link to='new-meetup'> Add New Meetup </Link>
        </li>
        <li>
          <Link to='favorites'> 
            My Favorites 
            {badgeJsx}
          </Link>
        </li>
      </ul>
    </nav>
  </header>;
}

export default MainNavigation;