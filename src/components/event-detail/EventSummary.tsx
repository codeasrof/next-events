import styles from "./EventSummary.module.css"

interface IProps{
    title: string;
}

function EventSummary({title} : IProps) {
  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;