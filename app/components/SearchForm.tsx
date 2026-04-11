'use client';
import React, {useState} from "react";
import Select from "react-select";
import DatePicker from "./DatePicker";
import { formatDateForComparison } from "../utils/formatDateComparison";
import buttonStyles from "./Button.module.css";
import styles from "./SearchForm.module.css";


export default function SearchForm({departures, onSearch}: any) {
    const today = formatDateForComparison(new Date());

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState<Date | undefined>(undefined);

    const formatDate = (date: Date | undefined) => {
        if(!date) return "";

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    };

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
        ),
    ];

    const dateOptions = [
        ...new Set(
            departures
            .filter((d: any) => {
                const matchesFrom = from ? d.from === from : true;
                const matchesTo = to ? d.to === to : true;
                const isTodayOrFuture = d.date >= today;
                    return matchesFrom && matchesTo && isTodayOrFuture;
            })
            .map((d: any) => d.date)
        ),
    ];
    console.log("dateOptions in SearchForm", dateOptions);

    const departureOptionsForSelect = departureOptions.map((option) => ({ value: option, label: option }));
    const destinationOptionsForSelect = destinationOptions.map((option) => ({ value: option, label: option }));

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch({ 
            from, 
            to, 
            date: date ? formatDateForComparison(date) : "", 
        });
    };

    console.log("dateOptions passed from SearchForm", dateOptions);

  return (
    <div className={styles.formDiv}>
        <form onSubmit={handleSubmit} className={styles.form}>
            {/*Departure*/}
            <label htmlFor="from">From:</label>
            <Select 
                instanceId="from-select"
                value={departureOptionsForSelect.find((option) => option.value === from) || null } 
                options={departureOptionsForSelect} 
                isSearchable={true} 
                onChange={(selectedOption: any) => setFrom(selectedOption ? selectedOption.value : "")}
                placeholder="Reise fra"
                className={styles.selectOptions}
            />

            {/*Destination*/}
            <label htmlFor="to">To:</label>
            <Select 
                instanceId="to-select" 
                value={destinationOptionsForSelect.find((option) => option.value === to) || null } 
                options={destinationOptionsForSelect}
                isSearchable={true}
                onChange={(selectedOption: any) => setTo(selectedOption ? selectedOption.value : "")}
                placeholder="Reise til"
                className={styles.selectOptions} 
            />
            
            {/*Date*/}
            <label htmlFor="date">Date:</label>
            <DatePicker
                selectedDate={date}
                onChange={(newDate: Date | undefined) => setDate(newDate)}
                availableDates={dateOptions}
            />
            <button type="submit" className={buttonStyles.button}>
                Søk
            </button>
        </form>
    </div>
  );
}
