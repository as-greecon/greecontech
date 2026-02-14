export type Site = {
  id: string;
  name: string;
  region: string;
  status: "Online" | "Maintenance";
};

export type Asset = {
  id: string;
  name: string;
  site: string;
  category: string;
};

export type Alarm = {
  id: string;
  title: string;
  site: string;
  severity: "Low" | "Medium" | "High";
  time: string;
};

export const sites: Site[] = [
  { id: "S-001", name: "North Solar Hub", region: "Lahore", status: "Online" },
  { id: "S-002", name: "Valley Water Station", region: "Faisalabad", status: "Maintenance" }
];

export const assets: Asset[] = [
  { id: "A-101", name: "Inverter Cluster 7", site: "North Solar Hub", category: "Energy" },
  { id: "A-204", name: "Pump Array B", site: "Valley Water Station", category: "Water" }
];

export const alarms: Alarm[] = [
  { id: "AL-900", title: "Voltage drift warning", site: "North Solar Hub", severity: "Low", time: "2m ago" },
  { id: "AL-901", title: "Pump pressure below threshold", site: "Valley Water Station", severity: "High", time: "12m ago" }
];
