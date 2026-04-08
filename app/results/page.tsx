'use client';
import { useSearchParams } from "next/navigation";
import {useEffect, useState } from "react";
import DepartureList from "./../components/DepartureList";

//Search results page
export default function Results() {
    const searchParams = useSearchParams();
    const from = searchParams.get("from");
    const to = searchParams.get("to");
    const date = searchParams.get("date");

    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            const response = await fetch(`/api`);
            const data = await response.json();
           
            const filteredResults = data.filter((d: any) => {
                return (
                    (d.from === from) &&
                    (d.to === to) &&
                    (d.date === date)
                );
            });
            setResults(filteredResults);
        };

        if (from && to && date) {
            fetchResults();
        }
    }, [from, to, date]);

    return(
        <div>
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
                    <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
                        Tilgjenglige reiser
                    </h1>
                    <DepartureList departures={results} />
                </div>
            </main>
        </div>
    )
}