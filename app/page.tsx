import SearchForm from "./components/SearchForm";
import styles from "./page.module.css";



//Search page
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Fjodaline Bookings
          </h1>
          <SearchForm />
        </div>
      </main>
    </div>
  );
}
