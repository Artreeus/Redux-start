export interface Itask {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    isCompleted: boolean;
    priority: 'High' | 'Medium' | 'Low';
}