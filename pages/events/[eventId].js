import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'

// components
import EventSummary from '../../components/EventDetail/EventSummary'
import EventLogistics from '../../components/EventDetail/EventLogistics'
import EventContent from '../../components/EventDetail/EventContent'

function EventDetailPage () {
  const router = useRouter()
  const eventId = router.query.eventId

  const eventDetail = getEventById(eventId)

  if (!eventDetail) {
    return <p> No event found!</p>
  }

  return (
    <Fragment>
      <EventSummary title={eventDetail.title} />
      <EventLogistics
        // date={eventDetail.date}
        // address={eventDetail.location}
        // image={eventDetail.image}
        // imageAlt={eventDetail.title}
        eventDetail={eventDetail}
      />
      <EventContent>
        <p>{eventDetail.description}</p>
      </EventContent>
    </Fragment>
  )
}

export default EventDetailPage
