
import { getHours, getMinutes } from 'date-fns';

// Custom configurations for different regions or preferences
const timeConfigurations: TimeConfigurations = {
    default: {
        morning: { start: [5, 0], end: [12, 0] },    // 5:00 AM - 11:59 AM
        afternoon: { start: [12, 0], end: [17, 0] }, // 12:00 PM - 4:59 PM
        evening: { start: [17, 0], end: [21, 0] },   // 5:00 PM - 8:59 PM
        night: { start: [21, 0], end: [5, 0] }       // 9:00 PM - 4:59 AM
    },
    earlyRiser: {
        morning: { start: [4, 0], end: [11, 0] },    // 4:00 AM - 10:59 AM
        afternoon: { start: [11, 0], end: [16, 0] }, // 11:00 AM - 3:59 PM
        evening: { start: [16, 0], end: [20, 0] },   // 4:00 PM - 7:59 PM
        night: { start: [20, 0], end: [4, 0] }       // 8:00 PM - 3:59 AM
    }
};

interface TimeConfigurations {
    [key: string]: {
        morning: TimeSlotOfDay;
        afternoon: TimeSlotOfDay;
        evening: TimeSlotOfDay;
        night: TimeSlotOfDay;
    };
}

interface TimeSlotOfDay {
    start: [number, number]; // [hour, minute]
    end: [number, number];   // [hour, minute]
}

// Time of day with configurable boundaries
export const getTimeOfDay = (date = new Date(), configKey = 'default') => {
    const config = timeConfigurations[configKey];
    const now = date;
    const hour = getHours(now);
    const minute = getMinutes(now);
    const currentMinutes = (hour * 60) + minute;

    // Helper function to convert hour and minute to minutes since midnight
    const toMinutes = (hourMin: [number, number]) => (hourMin[0] * 60) + hourMin[1];

    // Check morning, afternoon, and evening (periods that don't cross midnight)
    for (const [period, times] of Object.entries(config) as [string, TimeSlotOfDay][]) {
        if (period === 'night') continue; // Skip night, handle it separately

        const startMinutes = toMinutes(times.start);
        const endMinutes = toMinutes(times.end);

        if (currentMinutes >= startMinutes && currentMinutes < endMinutes) {
            return period;
        }
    }

    // If we got here, it must be night (crossing midnight)
    return 'night';
}
