import Button from "../ui/Button"
import styles from "./EventsSearch.module.css"
import { useRef } from "react"

export default function EventsSearch({onSearch} : any) {

  const months = ["January", "February", "March", "May", "June", "July", "August", "September", "October", "November", "December"]
  const yearInputRef = useRef<HTMLSelectElement>(null)
  const monthInputRef = useRef<HTMLSelectElement>(null)

  const submitHandler = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const selectedYear = yearInputRef.current?.value
    const selectedMonth = monthInputRef.current?.value
    onSearch(selectedYear, selectedMonth)
  }
  return (
    <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.controls}>
            <div className={styles.control}>
                <label htmlFor="year">Year</label>
                <select id="year" ref={yearInputRef}>
                    <option value="2021">
                        2021
                    </option>
                    <option value="2022">
                        2022
                    </option>
                </select>
            </div>

            <div className={styles.control}>
                <label htmlFor="month">Month</label>
                <select id="month" ref={monthInputRef}>
                    {months.map((month, monthIndex) => (
                        <option key={monthIndex} value={month}>
                            {month}
                        </option>
                    ))}
                </select>
            </div>
        </div>
        <Button onClick={() => {}}>
            Find events
        </Button>
    </form>
  )
}
