import React from 'react'
import EventItem from './EventItem'

// styles
import classes from '../Events/EventList.module.css'

function EventList ({ featuredEvents }) {
  return (
    <ul className={classes.list}>
      {featuredEvents.map(event => (
        <EventItem event={event} key={event.id} />
      ))}
    </ul>
  )
}

export default EventList
