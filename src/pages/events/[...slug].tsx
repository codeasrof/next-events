import { useRouter } from "next/router"
import { getFilteredEvents } from "../../../dummy-data"
import EventList from "@/components/events/EventList"
import ResultsTitle from "@/components/events/ResultTitle"
import Button from "@/components/ui/Button"
import ErrorAlert from "@/components/ui/ErrorAlert"

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
      return <>
      <ErrorAlert>
        <div className="center">
          <p className="center">Invalid Filter Adjust your values</p>
          <br />
          <p>OR</p>
          <br />
          <Button link="/events">Show All Events</Button>
        </div>
      </ErrorAlert>
      </> 
    }

    const filteredEvents = getFilteredEvents({
      year: numYear,
      month: numMonth
    })

    if(!filteredEvents || filteredEvents.length === 0){
      return <>
        <div className="center">
          <p>No Events Found for the choosen filter.</p>
          <br />
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    }

    const date = new Date(numYear, numMonth - 1)

    return(
      <>
        <ResultsTitle date={date}/>
        <EventList items={filteredEvents}/>
      </>
    )
  }