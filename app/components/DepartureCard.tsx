'use client';

import { useRouter } from "next/navigation";

export default function DepartureCard({ departure }: any) {
    const router = useRouter();

    const handleSelect = () => {
        router.push(`/summary?id=${departure.id}&from=${departure.from}&to=${departure.to}&date=${departure.date}&durationTime=${departure.durationMinutes}&price=${departure.price}`);
    }
    return (
        <div className="p-4 mb-4 rounded-lg shadow">
            <p><strong>Fra:</strong> {departure.from}<strong> Til:</strong> {departure.to}</p>
            <p><strong>Dato:</strong> {departure.date}</p>
            <p><strong>Avgangstid:</strong> {departure.departureTime}</p>
            <p><strong>Reisetid: </strong>{departure.durationMinutes} min</p>
            <p><strong>Pris:</strong> {departure.price} NOK</p>

            <button type="button"
            onClick={handleSelect} 
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Velg reise
            </button>
        </div>
    );
}