export interface ITuition {
    id: number;
    tuitionKey: string;
    tuitionCode: string;
    title: string;
    studentId: number;
    term: ITerm;
    department: string;
    major: string;
    description: string;
    amount: number;
    currency: string;
    isView: boolean;
    calculationDate: Date;
    hasScholarship: boolean;
    paymentStatus: PaymentStatus;
    paymentDueDate: Date;
    byCourses: ITuitionPerCourse[];
    createdAt: Date;
    updatedAt: Date;
}

export interface ITuitionPerCourse {
    id: number;
    code: string;
    name: string;
    credits: number;
    amount: number;
    currency: string;
}
export interface ITerm {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    isCurrent: boolean;
}

export enum PaymentStatus {
    NotPaid = "Chưa thanh toán",
    PartiallyPaid = "Thanh toán 1 phần",
    PaidInFull = "Đã thanh toán",
    Overdue = "Quá hạn",
}
export type PaymentStatusKey = keyof typeof PaymentStatus;