import { useRef } from 'react';

import Card from '../../ui/Card/Card';

import classes from './NewMeetupForm.module.css';



function NewMeetupForm({onAddMeetup}) {
  const titleInputRef = useRef();
  const imgInputRef = useRef();
  const addressInputRef = useRef();
  const descInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const title = titleInputRef.current.value.trim();
    const image = imgInputRef.current.value.trim();
    const description = descInputRef.current.value.trim();
    const address = addressInputRef.current.value.trim();

    const meetupdata = {
      title,
      image,
      description,
      address
    };

    onAddMeetup(meetupdata)

  }

  return <Card>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='title'> Meetup Title </label>
        <input id='title' type='text' required ref={titleInputRef} />
      </div>

      <div className={classes.control}>
        <label htmlFor='image'> Meetup Image </label>
        <input id='image' type='url' required ref={imgInputRef} />
      </div>

      <div className={classes.control}>
        <label htmlFor='address'> Meetup Address </label>
        <input id='address' type='text' required ref={addressInputRef} />
      </div>

      <div className={classes.control}>
        <label htmlFor='description'> Meetup Description </label>
        <textarea id='description' rows='5' required ref={descInputRef} ></textarea>
      </div>

      <div className={classes.actions}>
        <button> Add Meetup </button>
      </div>
    </form>
  </Card>;
}

export default NewMeetupForm;