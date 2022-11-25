import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm/NewMeetupForm';

const meetupUrl = 'https://vue-http-exmp-default-rtdb.firebaseio.com/';


function NewMeetupsPage() {
  const navigate = useNavigate();
  
  const addMeetupHandler = meetup => {
    fetch(meetupUrl + 'reactive-Meetups.json', 
    {
      method: 'POST',
      body: JSON.stringify(meetup),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(() => {
      navigate('/', { replace: true });
    });
  }

  return <section>
    <h1>Add New Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  </section>;
}

export default NewMeetupsPage;