'use client';

import { useRouter } from "next/navigation";
import buttonStyles from "./Button.module.css";
import styles from "./DepartureCard.module.css";

export default function DepartureCard({ departure }: any) {
    const router = useRouter();

    const handleSelect = () => {
        router.push(`/summary?id=${departure.id}
            &from=${departure.from}
            &to=${departure.to}
            &date=${departure.date}
            &arrivalDate=${departure.arrivalDate}
            &departureTime=${departure.departureTime}&durationTime=${departure.durationMinutes}&arrivalTime=${departure.arrivalTime}&price=${departure.price}&currency=${departure.currency}`);
    }
    return (
        <div className={styles.departureCard}>
            <div>
                {departure.isOvernight && (
                    <div className={styles.nightDeparture}>
                        Natt
                    </div>
                )}
                    <div className={styles.travelInfo}>
                        <div className={styles.departureInfo}>
                            <p>{departure.departureTime}</p>
                            <p><strong>Fra:</strong> {departure.from}</p>
                            <p>{departure.date}</p>
                        </div>
                        <div className={styles.duration}>
                            <p>{departure.durationMinutes} min</p>
                        </div>
                        <div className={styles.arrivalInfo}>
                            <p>{departure.arrivalTime}</p>
                            <p><strong> Til:</strong> {departure.to}</p>
                            <p>{departure.arrivalDate}</p>
                        </div>
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