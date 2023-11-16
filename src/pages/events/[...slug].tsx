import { useRouter } from "next/router"
import { getFilteredEvents } from "../../../dummy-data"
import EventList from "@/components/events/EventList"
import ResultsTitle from "@/components/events/ResultTitle"

export default function FilteredEventsPage({ params }: { params: { slug: string } }) {
    const router = useRouter()
    const fitleredData = router.query.slug

    if(!fitleredData){
      return <p className="center">Loading...</p>
    }

    const filteredYear = fitleredData[0]
    const filteredMonth = fitleredData[1]

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if(
      isNaN(numYear) || 
      isNaN(numMonth) || 
      numYear > 2040 || 
      numYear < 2021 || 
      numMonth < 1 ||
      numMonth > 12
    ){
      return <p className="center">Invalid Filter Adjust your values</p>
    }

    const filteredEvents = getFilteredEvents({
      year: numYear,
      month: numMonth
    })

    if(!filteredEvents || filteredEvents.length === 0){
      return <p className="center">No Events Found for the choosen filter.</p>
    }

    const date = new Date(numYear, numMonth - 1)

    return(
      <>
        <ResultsTitle date={date}/>
        <EventList items={filteredEvents}/>
      </>
    )
  }