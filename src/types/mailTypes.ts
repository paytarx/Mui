export interface Column {
    id: 'sender' | 'subject' | 'date';
    label: string;
    minWidth?: number;
    align?: 'right';
  }
  
export interface Email {
    id: number;
    sender: string;
    subject: string;
    date: string;
    body: string;
  }