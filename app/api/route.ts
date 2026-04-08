import { NextResponse } from "next/server";
import departures from "../_data/departures.json";

export async function GET() {
    return NextResponse.json(departures);
}