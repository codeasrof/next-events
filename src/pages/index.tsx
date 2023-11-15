import EventsSearch from "@/components/events/EventsSearch"
import { getFeaturedEvents } from "../../dummy-data"
import EventList from "@/components/events/EventList"

export default function Home(){
  const featuredEvents = getFeaturedEvents()

  return(
    <>
      <EventsSearch/>
      <EventList items={featuredEvents}/>
    </>
  )
}