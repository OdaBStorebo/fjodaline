export function showDurationTime(minutes: any){
        const hours = Math.floor(Number(minutes) / 60);
        const min = Number(minutes) % 60;

        if (minutes === 0) { 
            return `${hours}t`; 
        }
        return `${hours}t ${min}min`;
    }