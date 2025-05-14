
import { format } from 'date-fns';
export const formattedDate = (date: Date) => {
    // format the date as dd/MM/yyyy (day/month/year)
    return format(date, 'dd/MM/yyyy');
}