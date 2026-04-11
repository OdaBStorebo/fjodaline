//Booking summary page
'use client';

import { useSearchParams } from "next/navigation";
import { showDurationTime } from "../utils/formatDuration";
import { formatDate } from "../utils/formatDate";
import styles from "./Summary.module.css";

export default function Summary() {
    const searchParams = useSearchParams();

    const id = searchParams.get("id");
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const date = searchParams.get("date");
    const arrivalDate = searchParams.get("arrivalDate");
    const departureTime = searchParams.get("departureTime");
    const durationTime = searchParams.get("durationTime");
    const arrivalTime = searchParams.get("arrivalTime");
    const price = searchParams.get("price");
    const currency = searchParams.get("currency");
    
    return(
        <div className={styles.summary}>
            <main className={styles.main}>
                <h1>Reiseoppsummering</h1>
                <div className={styles.summaryContent}>
                    <div className={styles.destinationInfo}>
                        <p><strong>Fra</strong><br></br> {from}</p>
                        <p><strong> Til</strong><br></br> {to}</p>
                    </div> 
                    <div className={styles.date}>
                        <p><strong>Avreisedato</strong><br></br> {formatDate(date)}</p>
                        <p><strong>Ankomstdato</strong><br></br> {formatDate(arrivalDate)}</p>
                    </div>
                    <div className={styles.timeInfo}>
                        <p><strong>Avgangstid</strong><br></br> {departureTime}</p>
                        <p><strong>Ankomsttid</strong><br></br> {arrivalTime}</p>
                    </div>
                    <div className={styles.additionalInfo}>
                        <p><strong>Reisetid </strong><br></br> {showDurationTime(durationTime)}</p>
                        <p><strong>Nattavgang</strong><br></br>ja nei</p>
                    </div>
                    <div className={styles.priceInfo}>
                        <p><strong>Totalpris</strong> {price} {currency}</p>
                    </div>
                </div>
                
            </main>
        </div>
    )
}