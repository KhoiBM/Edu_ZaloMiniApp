// services/examination.service.ts
import { ref } from 'vue';
import {
    StudentExamTimetable,
    Examination,
    ExaminationsByDate
} from '@/types';

export function useExaminationTimetableService() {
    const examTimetableData = ref<StudentExamTimetable | null>(null);
    const isLoading = ref(false);

    /**
     * Fetch examination timetable for a student
     */
    async function fetchExamTimetable(studentId: string): Promise<StudentExamTimetable> {
        isLoading.value = true;

        try {
            // Simulate API call with timeout
            await new Promise(resolve => setTimeout(resolve, 500));

            // Mock data for demonstration
            const mockTimetable: StudentExamTimetable = {
                studentId,
                studentName: 'John Smith',
                examinations: generateMockExaminations()
            };

            examTimetableData.value = mockTimetable;
            return mockTimetable;
        } finally {
            isLoading.value = false;
        }
    }

    /**
     * Group examinations by date
     */
    function groupExaminationsByDate(examinations: Examination[]): ExaminationsByDate[] {
        // Create a map of date to examinations
        const examMap = new Map<string, Examination[]>();

        // Sort examinations by date first
        const sortedExams = [...examinations].sort((a, b) => a.date.localeCompare(b.date));

        // Group examinations by date
        sortedExams.forEach(exam => {
            if (!examMap.has(exam.date)) {
                examMap.set(exam.date, []);
            }
            examMap.get(exam.date)!.push(exam);
        });

        // Convert to array of ExaminationsByDate
        const result: ExaminationsByDate[] = [];

        examMap.forEach((exams, date) => {
            // Sort examinations within each date group by start time
            const sortedByTime = [...exams].sort((a, b) =>
                a.timeSlot.startTime.localeCompare(b.timeSlot.startTime)
            );

            result.push({
                date,
                formattedDate: formatDate(date),
                examinations: sortedByTime
            });
        });

        return result;
    }

    /**
     * Format a date string into a human-readable format
     */
    function formatDate(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleDateString('vi-VN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    /**
     * Generate mock examination data for demonstration
     */
    function generateMockExaminations(): Examination[] {
        const examinations: Examination[] = [];

        // Sample courses
        const courses = [
            { id: 'CS101', code: 'CS101', name: 'Introduction to Programming', department: 'Computer Science' },
            { id: 'CS201', code: 'CS201', name: 'Data Structures', department: 'Computer Science' },
            { id: 'CS301', code: 'CS301', name: 'Database Systems', department: 'Computer Science' },
            { id: 'CS401', code: 'CS401', name: 'Software Engineering', department: 'Computer Science' },
            { id: 'IT101', code: 'IT101', name: 'Information Technology Fundamentals', department: 'IT' }
        ];

        // Sample venues
        const venues = [
            { building: 'A', room: '101' },
            { building: 'A', room: '201' },
            { building: 'B', room: '101' },
            { building: 'B', room: '201' },
            { building: 'C', room: '101' }
        ];

        // Sample exam types
        const examTypes = ["Final Exam", "Midterm", "Quiz", "Practical Exam"];

        // Generate dates spanning about a month
        const today = new Date();
        const dates = [];
        for (let i = 0; i < 8; i++) {
            const date = new Date();
            date.setDate(today.getDate() + i * 3); // Every three days
            dates.push(date.toISOString().split('T')[0]); // Get YYYY-MM-DD format
        }

        // Generate examinations
        for (let i = 0; i < courses.length; i++) {
            // Each course has 1-2 exams
            for (let j = 0; j < 5; j++) {
                const dateIndex = (i + j) % dates.length;
                const venueIndex = (i + j) % venues.length;
                const examTypeIndex = j % examTypes.length;

                // Create time slots (9:00 AM to 5:00 PM in 2-hour blocks)
                const startHour = 9 + (2 * (i % 4));
                const startTimeStr = `${String(startHour).padStart(2, '0')}:00`;
                const endTimeStr = `${String(startHour + 2).padStart(2, '0')}:00`;

                examinations.push({
                    id: `exam-${i}-${j}`,
                    course: courses[i],
                    date: dates[dateIndex],
                    timeSlot: {
                        startTime: startTimeStr,
                        endTime: endTimeStr,
                    },
                    venue: venues[venueIndex],
                    type: examTypes[examTypeIndex],
                    instructions: j === 0 ? 'Mang thẻ sinh viên và CCCD' : "Mang thẻ sinh viên, CCCD, laptop và tai nghe"
                });
            }
        }

        return examinations;
    }

    return {
        examTimetableData,
        isLoading,
        fetchExamTimetable,
        groupExaminationsByDate
    };
}