'use client';
import React, {useState, useEffect} from "react";
import { useRouter } from "next/navigation";
import buttonStyles from "./Button.module.css";
import styles from "./SearchForm.module.css";


export default function SearchForm() {
    const router = useRouter();
    const [departures, setDepartures] = useState([]);

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        const fetchDepartures = async () => {
            const response = await fetch("/api");
            const data = await response.json();
            setDepartures(data);
        };
        fetchDepartures();
    },[])

    const departureOptions = [
        ...new Set(
            departures
            .map((d: any) => d.from)
        )];

    const destinationOptions = [
        ...new Set(
            departures
            .filter((d: any) => d.from === from || !from)
            .map((d: any) => d.to)
        ),];

        const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
            e.preventDefault();
            router.push(`/results?from=${from}&to=${to}&date=${date}`);
        };

  return (
    <div className={styles.formDiv}>
        <form onSubmit={handleSubmit} className={styles.form}>
            {/*Departure*/}
            <label htmlFor="from">From:</label>
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
                <option value="">Velg avgang</option>
                {departureOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {/*Destination*/}
            <label htmlFor="to">To:</label>
            <select value={to} onChange={(e) => setTo(e.target.value)}>
                <option value="">Velg destinasjon</option>
                {destinationOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {/*Date*/}
            <label htmlFor="date">Date:</label>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="bg-white text-black placeholder:text-zinc-500 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button type="submit" className={buttonStyles.button}>
                Search
            </button>
        </form>
    </div>
  );
}
