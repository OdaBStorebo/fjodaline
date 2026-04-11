'use client';
import {useEffect, useState } from "react";
import DepartureList from "./components/DepartureList";
import SearchForm from "./components/SearchForm";
import styles from "./page.module.css";

//Search page
export default function Home() {
  const [departures, setDepartures] = useState<any[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [hasSearched, setHasSearched] = useState(false);


useEffect(() => {
        const fetchResults = async () => {
            const response = await fetch(`/api`);
            const data = await response.json();
            setDepartures(data);
        };
        fetchResults();
    },[]);  
    const handleSearch = ({ from, to, date }: any) => {
        const filteredResults = departures.filter((d: any) => {
            return (
                (d.from === from) &&
                (d.to === to) &&
                (d.date === date)
            );
        });
        setResults(filteredResults);
        setHasSearched(true);
    };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <h1>
            Fjodaline Bookings
          </h1>
          <SearchForm departures={departures} onSearch={handleSearch} />
          {hasSearched && <DepartureList departures={results} />}
        </div>
      </main>
    </div>
  );
}
