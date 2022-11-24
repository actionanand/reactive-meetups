import classes from './MeetupItem.module.css';
import Card from '../../ui/Card/Card';

function MeetupItem({ meetupData: { image, title, address, description: desc } }) {
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
        <button>To Favorite</button>
      </div>
    </Card>
  </li>;
}

export default MeetupItem;