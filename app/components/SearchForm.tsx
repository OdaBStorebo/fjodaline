'use client';
import React, {useState, useEffect} from "react";
import Select from "react-select";
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

        const departureOptionsForSelect = departureOptions.map((option) => ({ value: option, label: option }));
        const destinationOptionsForSelect = destinationOptions.map((option) => ({ value: option, label: option }));

  return (
    <div className={styles.formDiv}>
        <form onSubmit={handleSubmit} className={styles.form}>
            {/*Departure*/}
            <label htmlFor="from">From:</label>
            <Select instanceId="from-select" className={styles.selectOptions} placeholder="Reise fra"
                value={departureOptionsForSelect.find((option) => option.value === from) || null } 
                options={departureOptionsForSelect} 
                isSearchable={true} 
                onChange={(selectedOption) => setFrom(selectedOption ? selectedOption.value : "")}>
            </Select>

            {/*Destination*/}
            <label htmlFor="to">To:</label>
            <Select instanceId="to-select" className={styles.selectOptions} placeholder="Reise til"
                value={destinationOptionsForSelect.find((option) => option.value === to) || null } 
                options={destinationOptionsForSelect}
                isSearchable={true}
                onChange={(selectedOption) => setTo(selectedOption ? selectedOption.value : "")}>
            </Select>

            {/*Date*/}
            <label htmlFor="date">Date:</label>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={styles.dateInput}
            />

            <button type="submit" className={buttonStyles.button}>
                Search
            </button>
        </form>
    </div>
  );
}
