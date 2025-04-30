import { parse } from "papaparse";

export const getActivityLogsData = async () => {
  try {
    const response = await fetch("./activity-logs-data.csv");
    const csvText = await response.text();
    const result = parse(csvText, {
      header: true,
      skipEmptyLines: true,
    });
    const data = result.data.map((item: any) => ({
      clearanceName: item.Clearance_Name || null,
      doorName: item.DoorName2 || null,
      elevatorName: item.ElevatorName || null,
      scheduleName: item.ScheduleName || null,
    }));
    return data;
  } catch (error) {
    console.error("Error loading CSV:", error);
    throw new Error("Failed to fetch activity logs data");
  }
};
