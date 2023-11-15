import Button from "../ui/Button"
import styles from "./EventsSearch.module.css"

export default function EventsSearch() {
  const months = ["January", "February", "March", "May", "June", "July", "August", "September", "October", "November", "December"]
  return (
    <form className={styles.form}>
        <div className={styles.controls}>
            <div className={styles.control}>
                <label htmlFor="year">Year</label>
                <select id="year">
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
                <select id="month">
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
