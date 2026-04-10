'use client';

import { useRouter } from "next/navigation";
import styles from "./DepartureCard.module.css";

export default function DepartureCard({ departure, isSelected, onSelect }: any) {
    const router = useRouter();
    
    return (
        <div className={`${styles.departureCard} ${isSelected ? styles.selectedCard : ''}`}
            onClick={onSelect}
            role="button"
            tabIndex={0}
            onKeyUp={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    onSelect();
                }
            }}
        >
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
            </div>
        </div>
    );
}