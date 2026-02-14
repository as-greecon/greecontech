import { alarms } from "@/lib/demo-data";

const severityStyles = {
  Low: "bg-zinc-100 text-zinc-600",
  Medium: "bg-emerald-50 text-emerald-700",
  High: "bg-emerald-100 text-emerald-800"
};

export default function AlarmsPage() {
  return (
    <section className="rounded-xl border border-zinc-200 bg-white p-6">
      <ul className="space-y-3">
        {alarms.map((alarm) => (
          <li key={alarm.id} className="flex items-center justify-between rounded-lg border border-zinc-100 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-zinc-800">{alarm.title}</p>
              <p className="text-xs text-zinc-500">{alarm.site} • {alarm.time}</p>
            </div>
            <span className={`rounded-full px-2.5 py-1 text-xs ${severityStyles[alarm.severity]}`}>{alarm.severity}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
