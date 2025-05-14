export interface INotificationV {
    id: number;
    key: string;
    type: string;
    sourceFrom: string;
    title: string;
    subMessage: string;
    isRead: boolean;
    timeframe: string;
}

export interface INotificationDetailsV extends INotificationV {
    code: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}