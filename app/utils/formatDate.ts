export function formatDate(date: any) {
return new Date(date)
        .toLocaleDateString("no-NO", { 
            weekday: "long", 
            year: "numeric", 
            month: "long", 
            day: "numeric" });
}
