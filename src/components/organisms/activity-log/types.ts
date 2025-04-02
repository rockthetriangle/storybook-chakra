import type { Column } from "@tanstack/react-table";

export interface Activity {
  id: string;
  date: string; // ISO 8601 date string
  activity: string;
  location: string;
  duration: number; // Duration in days
  category: string;
  details: string;
  notes: string;
}

export interface ColumnButtonProps {
  column: Column<any, any>;
}

export interface FilterElementProps {
  value: any;
  onChange: (value: any) => void;
}
