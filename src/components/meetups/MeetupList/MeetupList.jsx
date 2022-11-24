import classes from './MeetupList.module.css';
import MeetupItem from '../MeetupItem/MeetupItem';

function MeetupList({meetups}) {
  return <ul className={classes.list} >
    { meetups.map(meetup => <MeetupItem key={meetup.id} meetupData={meetup} />) }
  </ul>;
}

export default MeetupList;