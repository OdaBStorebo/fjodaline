'use client';

import { useRouter } from "next/navigation";
import DepartureCard from "./DepartureCard";
import buttonStyles from "./Button.module.css";
import { useState } from "react";

export default function DepartureList( {departures}: any) {
    const router = useRouter();
    const [selectedDeparture, setSelectedDeparture] = useState<any>(null);

    if(!departures || departures.length === 0) {
        return (
            <div>
                <p>Ingen tilgjenglige reiser er funnet</p>
                <button type="button" className={buttonStyles.button} onClick={() => router.push("/")}>
                    Gå tilbake til søk
                </button>
            </div>
        );
    }

    const handleSelect = () => {
        if (!selectedDeparture) return;

        router.push(
            `/summary?id=${selectedDeparture.id} +
            &from=${selectedDeparture.from} +
            &to=${selectedDeparture.to} +
            &date=${selectedDeparture.date} +
            &arrivalDate=${selectedDeparture.arrivalDate} +
            &departureTime=${selectedDeparture.departureTime} +
            &durationTime=${selectedDeparture.durationMinutes} +
            &arrivalTime=${selectedDeparture.arrivalTime} +
            &price=${selectedDeparture.price} +
            &currency=${selectedDeparture.currency}`
        );
    }

    return (
        <div>
            {departures.map((departure: any) => (
                <DepartureCard key={departure.id} departure={departure} isSelected={selectedDeparture?.id === departure.id} onSelect={() => setSelectedDeparture(departure)} />
            ))}
            <button type="button" onClick={handleSelect} disabled={!selectedDeparture} className={buttonStyles.button}>
                Velg reise
            </button>
        </div>
    );
}