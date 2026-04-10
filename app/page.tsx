import SearchForm from "./components/SearchForm";
import styles from "./page.module.css";



//Search page
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <h1>
            Fjodaline Bookings
          </h1>
          <SearchForm />
        </div>
      </main>
    </div>
  );
}
