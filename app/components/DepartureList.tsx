'use client';

import { useRouter } from "next/navigation";
import DepartureCard from "./DepartureCard";
import styles from "./DepartureList.module.css";
import buttonStyles from "./Button.module.css";
import { useState, useEffect} from "react";

export default function DepartureList( {departures}: any) {
    const router = useRouter();
    const [selectedDeparture, setSelectedDeparture] = useState<any>(null);

    if(!departures || departures.length === 0) {
        return (
            <div>
                <p>Ingen tilgjenglige reiser er funnet!<br></br>Velg en ny reise</p>
            </div>
        );
    }
    
    {/*reset "Velg reise" state*/}
    useEffect(() =>{
        setSelectedDeparture(null);
    },[departures]);

    const handleSelect = () => {
        if (!selectedDeparture) return;

        router.push(
            `/summary?id=${selectedDeparture.id}` +
            `&from=${selectedDeparture.from}` +
            `&to=${selectedDeparture.to}` +
            `&date=${selectedDeparture.date}` +
            `&arrivalDate=${selectedDeparture.arrivalDate}` +
            `&departureTime=${selectedDeparture.departureTime}` +
            `&durationTime=${selectedDeparture.durationMinutes}` +
            `&arrivalTime=${selectedDeparture.arrivalTime}` +
            `&price=${selectedDeparture.price}` +
            `&currency=${selectedDeparture.currency}`
        );
    }

    return (
        <div className={styles.departureList}>
            {departures.map((departure: any) => (
                <DepartureCard key={departure.id} departure={departure} isSelected={selectedDeparture?.id === departure.id} onSelect={() => setSelectedDeparture(departure)} />
            ))}
            <div className={styles.buttonContainer}>
                <button type="button" onClick={handleSelect} disabled={!selectedDeparture} className={`${buttonStyles.button} ${styles.button}`}>
                    Velg reise
                </button>
            </div>
        </div>
    );
}