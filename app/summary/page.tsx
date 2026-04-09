//Booking summary page
'use client';

import { useSearchParams } from "next/navigation";

export default function Summary() {
    const searchParams = useSearchParams();

    const id = searchParams.get("id");
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const date = searchParams.get("date");
    const departureTime = searchParams.get("departureTime");
    const durationTime = searchParams.get("durationTime");
    const arrivalTime = searchParams.get("arrivalTime");
    const price = searchParams.get("price");
    const currency = searchParams.get("currency");
    
    return(
        <div>
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Reiseoppsummering
                    </h1>
                    <p><strong>Fra:</strong> {from}<strong> Til:</strong> {to}</p>
                    <p><strong>Dato:</strong> {date}</p>
                    <p><strong>Avgangstid:</strong> {departureTime}</p>
                    <p><strong>Ankomsttid:</strong> {arrivalTime}</p>
                    <p><strong>Reisetid: </strong> {durationTime} min</p>
                    <p><strong>Pris:</strong> {price} {currency}</p>
                </div>
            </main>
        </div>
    )
}