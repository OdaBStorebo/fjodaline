'use client';

import { useRouter } from "next/navigation";
import DepartureCard from "./DepartureCard";
import styles from "./Button.module.css";

export default function DepartureList( {departures}: any) {
    const router = useRouter();

    if(!departures || departures.length === 0) {
        return (
            <div>
                <p>Ingen tilgjenglige reiser er funnet</p>
                <button type="button" className={styles.button} onClick={() => router.push("/")}>
                    Tilbake til søk
                </button>
            </div>
        );
    }

    return (
        <div>
            {departures.map((departure: any) => (
                <DepartureCard key={departure.id} departure={departure} />
            ))}
        </div>
    );
}