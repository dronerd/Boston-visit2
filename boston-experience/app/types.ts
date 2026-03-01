export interface Guest {
  name: string;
  title: string;
  bio: string;
  linkedin?: string;
}

export interface Session {
  id: number;
  time: string;
  title: string;
  description: string;
  guests?: Guest[];
  notes?: string;
  references?: { label: string; url: string }[];
}

export interface DaySchedule {
  date: string;
  dayName: string;
  theme: string;
  sessions: Session[];
  notes?: string;
}

export default DaySchedule;
