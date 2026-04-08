'use client';

import { useRouter } from "next/navigation";
import DepartureCard from "./DepartureCard";

export default function DepartureList( {departures}: any) {
    const router = useRouter();

    if(!departures || departures.length === 0) {
        return (
            <div>
                <p>Ingen tilgjenglige reiser er funnet</p>
                <button type="button" className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                onClick={() => router.push("/")}>
                    Gå tilbake til søk
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