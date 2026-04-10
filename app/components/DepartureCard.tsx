'use client';

import { useRouter } from "next/navigation";
import buttonStyles from "./Button.module.css";
import styles from "./DepartureCard.module.css";

export default function DepartureCard({ departure }: any) {
    const router = useRouter();

    const handleSelect = () => {
        router.push(`/summary?id=${departure.id}&from=${departure.from}&to=${departure.to}&date=${departure.date}&departureTime=${departure.departureTime}&durationTime=${departure.durationMinutes}&arrivalTime=${departure.arrivalTime}&price=${departure.price}&currency=${departure.currency}`);
    }
    return (
        <div className={styles.departureCard}>
            <div>
                <div className={styles.nightDeparture}>
                    {departure.isOvernight && <span>Natt</span>}
                </div>
                    <div className={styles.travelInfo}>
                        <p><strong>Dato:</strong> {departure.date}</p>
                        <p><strong>Fra:</strong> {departure.from}<strong> Til:</strong> {departure.to}</p>
                        <p><strong>Avgangstid:</strong> {departure.departureTime}<strong> Ankomsttid:</strong> {departure.arrivalTime}</p>
                        <p><strong>Reisetid: </strong>{departure.durationMinutes} min</p>
                    </div>
                </div>
            <div className={styles.cardPrice}>
                <p>{departure.price} {departure.currency}</p>
                <button type="button" onClick={handleSelect} className={buttonStyles.button}>
                    Velg reise
                </button>
            </div>
        </div>
    );
}