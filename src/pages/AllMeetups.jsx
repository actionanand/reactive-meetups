import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList/MeetupList';


function AllMeetupsPage() {
  const [isLoading, setIsloading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    setIsloading(true);

    fetch(process.env.REACT_APP_MEETUP_URL + 'reactive-Meetups.json')
    .then(resp => {
      return resp.json()
    })
    .then(data => {
      const slicedData = Object.fromEntries(Object.entries(data).slice(0, 5));
      const meetups = [];

      for(const key in slicedData) {
        const meetup = {
          id: key,
          ...slicedData[key]
        };

        meetups.push(meetup);
      }

      setIsloading(false);
      setFetchedData(meetups);
    });
  }, []);

  if(isLoading) {
    return <section>
      <p>Loading...</p>
    </section>;
  }

  return <section>
    <h1> All Meetups </h1>
    <MeetupList meetups={ fetchedData } />
  </section>;
}

export default AllMeetupsPage;