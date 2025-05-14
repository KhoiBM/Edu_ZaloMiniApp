// models/examination.types.ts

/**
 * Represents a university course
 */
export interface Course {
    id: string;
    code: string;
    name: string;
    department: string;
}

/**
 * Represents an examination venue
 */
export interface ExamVenue {
    building: string;
    room: string;
}

/**
 * Represents an examination time slot
 */
export interface ExamTimeSlot {
    startTime: string; // Format: "HH:MM" in 24-hour format
    endTime: string;   // Format: "HH:MM" in 24-hour format
}

/**
 * Represents a single examination
 */
export interface Examination {
    id: string;
    course: Course;
    date: string;       // ISO date string (YYYY-MM-DD)
    timeSlot: ExamTimeSlot;
    venue: ExamVenue;
    type: string;
    instructions?: string;
}

/**
 * Represents examinations grouped by date
 */
export interface ExaminationsByDate {
    date: string;       // ISO date string (YYYY-MM-DD)
    formattedDate: string; // Human-readable date (e.g., "Monday, May 15, 2025")
    examinations: Examination[];
}

/**
 * Represents the complete examination timetable for a student
 */
export interface StudentExamTimetable {
    studentId: string;
    studentName: string;
    examinations: Examination[];
}

/**
 * Interface for the van-list component state
 */
export interface ListState {
    loading: boolean;
    finished: boolean;
    error: boolean;
}