import EventItem from "./EventItem"
import styles from "./EventList.module.css"

interface IProps {
    items: {
      id: string;
      title: string;
      location: string;
      date: string;
      image: string;
    }[];
  }

export default function EventList(props : IProps) {
  const {items} = props
  console.log(typeof props)
  return (
    <ul className={styles.list}>
        {items.map((event : any) => (
            <EventItem 
                key={event.id} 
                id={event.id} 
                title={event.title} 
                location={event.location}
                date={event.date}
                image={event.image}
            />
        ))}
    </ul>
  )
}
