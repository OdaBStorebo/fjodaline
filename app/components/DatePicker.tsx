import { DayPicker } from "react-day-picker";
import { useEffect, useState } from "react";
import { formatDateForComparison } from "../utils/formatDateComparison";
import "react-day-picker/style.css";
import styles from "./DatePicker.module.css";

export default function DatePicker({selectedDate, onChange, availableDates=[],}: any) {
    const [inputValue, setInputValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    {/*Sync input when a date picked */}
    useEffect(() => {
    if (selectedDate) {
      setInputValue(
        selectedDate.toLocaleDateString("no-NO", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })
      );
    }
  }, [selectedDate]);

  {/*user writes date */}
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);

    const parsedDate = parseDate(value);
        if(parsedDate){
            onChange(parsedDate);
        }
  };

  const parseDate = (value: String) => {
    const parts = value.split(".");
    if(parts.length !== 3){
        return undefined;
    }
    const [day, month, year] = parts.map(Number);
    const date = new Date(year, month -1, day);

    return isNaN(date.getTime()) ? undefined : date;
  };

  const handleSelect = (date: Date | undefined) => {
    onChange(date);
    setIsOpen(false);
  };
    console.log("availableDates", availableDates);
    return (
        <div className={styles.datePicker}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={() => setIsOpen(true)}
                placeholder="dd.mm.yyyy"
                className={styles.input}
                />
                {/*disabled={(day) => !availableDates.includes(formatDateForComparison(day))}*/}
                {isOpen && (
                <div className={styles.calender}>
                    <DayPicker
                        mode="single"
                        selected={selectedDate}
                        onSelect={handleSelect}
disabled={(day) => {
  const formatted = formatDateForComparison(day);
  const isAvailable = availableDates.includes(formatted);
  console.log("calendar day:", formatted, "available:", isAvailable);
  return !isAvailable;
}}
                    />
                </div>
                )}
        </div>
  );
}