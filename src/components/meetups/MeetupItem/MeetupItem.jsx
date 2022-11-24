import classes from './MeetupItem.module.css';

function MeetupItem({ meetupData: { image, title, address, description: desc } }) {
  return <li className={classes.item} >
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
  </li>;
}

export default MeetupItem;