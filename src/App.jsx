import { Route, Routes, Navigate } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <AllMeetupsPage /> }></Route>
      <Route path='/new-meetup' element={ <NewMeetupsPage /> }></Route>
      <Route path='/favorites' element={ <FavoritesPage /> }></Route>
      <Route path='/' element={ <AllMeetupsPage/> }></Route>
      <Route path='*' element={ <Navigate replace to='/' /> } />
    </Routes>
  );
}

export default App;