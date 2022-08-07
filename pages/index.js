import { getFeaturedEvents } from '../dummy-data'

// components
import EventList from '../components/Events/EventList'

function HomePage () {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <EventList featuredEvents={featuredEvents} />
    </div>
  )
}

export default HomePage
