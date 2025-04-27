import type { Column } from "@tanstack/react-table";

export interface Clearance {
  clearanceName: string;
  doorName: string | null;
  elevatorName: string | null;
  scheduleName: string;
}

export interface ColumnButtonProps {
  column: Column<any, any>;
}

export interface FilterElementProps {
  value: any;
  onChange: (value: any) => void;
}
