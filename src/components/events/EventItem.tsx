import Image from "next/image"
import styles from "./EventItem.module.css"
import Button from "../ui/Button"
import DateIcon from "../icons/date-icon"
import AddressIcon from "../icons/address-icon"
import { ArrowRightIcon } from "@heroicons/react/20/solid"

interface IProps{
    title: string;
    image: string;
    date:string;
    location: string;
    id: string
}

export default function EventItem(props : IProps) {

  const {title, image, date, location, id} = props
  const humanRedableDate = new Date(date).toLocaleDateString('en-US', {
    day: "numeric",
    month:"long",
    year:"numeric"
  })
  const formattedAddress = location.replace(", ", "\n")
  const exploreLink = `/events/${id}`

  return (
    <li className={styles.item}>
        <Image src={'/' + image} alt={`img-${title}`} width={200} height={200}/>
        <div className={styles.content}>
            <div className={styles.summary}>
                <h2>{title}</h2>
                <div className={styles.date}>
                    <DateIcon/>
                    <time>{humanRedableDate}</time>
                </div>
                <div className={styles.address}>
                    <AddressIcon/>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={styles.actions}>
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span><ArrowRightIcon style={{width:"50px", height:"30px"}}/></span>
                </Button>
            </div>
        </div>
    </li>
  )
}
