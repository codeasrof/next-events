import EventsSearch from "@/components/events/EventsSearch"
import { getFeaturedEvents } from "../../dummy-data"
import EventList from "@/components/events/EventList"
import { useRouter } from "next/router"

export default function Home(){
  const router = useRouter()
  const featuredEvents = getFeaturedEvents()

  const findEventsHandler = (year:string, month:string) => {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return(
    <>
      <EventsSearch onSearch={findEventsHandler}/>
      <EventList items={featuredEvents}/>
    </>
  )
}