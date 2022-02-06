import Link from "next/link";

import classes from './event-item.module.css'

function EventItem(props){

  const {title, image, date, location, id} = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formatedAddress = location.replace(', ', '/n');
  const exploreLik = `/evets/${id}`;
  return(
   <li className={classes.item}>
    <img src={'/' + image} alt={title} />
    <div>
      <div>
        <h2>{title}</h2>
        <div>
          <time>{humanReadableDate}</time>
        </div>
        <div>
          <address>{formatedAddress}</address>
        </div>
      </div>
      <div>
        <Link href={exploreLik}>Explore Event</Link>
      </div>
    </div>
  </li>
  )
}

export default EventItem;