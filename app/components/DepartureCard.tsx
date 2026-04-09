'use client';

import { useRouter } from "next/navigation";
import styles from "./Button.module.css";

export default function DepartureCard({ departure }: any) {
    const router = useRouter();

    const handleSelect = () => {
        router.push(`/summary?id=${departure.id}&from=${departure.from}&to=${departure.to}&date=${departure.date}&departureTime=${departure.departureTime}&durationTime=${departure.durationMinutes}&arrivalTime=${departure.arrivalTime}&price=${departure.price}&currency=${departure.currency}`);
    }
    return (
        <div className="p-4 mb-4 rounded-lg shadow">
            <div>
                <div className="rounded-full shadow border-2 border-red-500 text-red-500 w-min">{departure.isOvernight && <span className="p-2 pt-2 pb-2">Natt</span>}</div>
                <p><strong>Dato:</strong> {departure.date}</p>
                <p><strong>Fra:</strong> {departure.from}<strong> Til:</strong> {departure.to}</p>
                <p><strong>Avgangstid:</strong> {departure.departureTime}</p>
                <p><strong>Ankomsttid:</strong> {departure.arrivalTime}</p>
                <p><strong>Reisetid: </strong>{departure.durationMinutes} min</p>
            </div>
            <div className="">
                <p><strong>Pris:</strong> {departure.price} {departure.currency}</p>
                <button type="button" onClick={handleSelect} className={styles.button}>
                    Velg reise
                </button>
            </div>
        </div>
    );
}