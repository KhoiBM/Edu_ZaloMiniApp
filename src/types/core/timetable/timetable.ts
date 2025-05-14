/**
 * Represents a time slot in 24-hour format (HH:MM)
 * Example: "09:30" for 9:30 AM
 */
export type TimeSlot = string;

/**
 * Enum for days of the week
 */
export enum WeekDay {
    MONDAY = "MONDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY = "THURSDAY",
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY"
}

/**
 * Enum for course types in IT curriculum
 */
export enum CourseType {
    LECTURE = "LECTURE",
    LAB = "LAB",
    ONLINE = "ONLINE"
}

/**
 * Interface representing a location where classes are held
 */
export interface Location {
    id: number;
    key: string;
    code: string;
    building: string;
    room: string;
    floor?: number; // Optional floor number
    hasComputers?: boolean; // Whether the room has computers
    capacity?: number; // How many students can fit
}

/**
 * Interface representing a professor/instructor
 */
export interface Instructor {
    id: number;
    key: string;
    code: string;
    name: string;
    email: string;
    department: string;
    officeHours?: InstructorAvailability[]; // Optional office hours
}

/**
 * Interface for instructor availability (office hours)
 */
export interface InstructorAvailability {
    day: WeekDay;
    startTime: TimeSlot;
    endTime: TimeSlot;
    location?: Location;
}

/**
 * Interface representing a course in IT curriculum
 */
export interface Course {
    id: number;
    key: string;
    code: string; // Course code like "CS101"
    name: string;
    description?: string;
    credits: number;
    required: boolean; // Is this a required course or elective
    prerequisites?: string[]; // Array of course codes that are prerequisites
    department: string;
    syllabus?: string; // URL or text description of syllabus
}

/**
 * Interface representing a class session (an occurrence of a course)
 */
export interface ClassSession {
    id: number;
    key: string;
    classSessionCode: string;
    courseId: string;
    type: CourseType;
    day: WeekDay;
    startTime: TimeSlot;
    endTime: TimeSlot;
    timestamp: Date; // Timestamp for when the class occurs
    location: Location;
    instructorId: string;
    weekPattern?: number[]; // For classes that don't occur every week (e.g., [1,3,5] for odd weeks)
    onlineMeetingUrl?: string; // For online or hybrid classes
}

/**
 * Interface for managing student enrollment in a course
 */
export interface Enrollment {
    id: number;
    key: string;
    enrollmentCode: string; // Unique code for the enrollme
    studentId: string;
    courseId: string;
    semester: string;
    year: number;
    status: EnrollmentStatus;
}

/**
 * Enum for enrollment status
 */
export enum EnrollmentStatus {
    ENROLLED = "ENROLLED",
    WAITLISTED = "WAITLISTED",
    DROPPED = "DROPPED",
    COMPLETED = "COMPLETED"
}


/**
 * Main interface for the IT student timetable
 */
export interface Timetable {
    id: number;
    key: string;
    timetableCode: string;
    studentId: string;
    semester: string;
    year: number;
    classSessions: ClassSession[];
    enrollments: Enrollment[];
    createdAt: Date;
    updatedAt: Date;
}
