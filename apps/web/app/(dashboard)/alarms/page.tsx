import { alarms } from "@/lib/demo-data";

const severityStyles = {
  Low: "bg-zinc-100 text-zinc-600",
  Medium: "bg-[color:rgba(20,164,99,0.10)] text-greecon.primary",
  High: "bg-[color:rgba(20,164,99,0.18)] text-greecon.deep"
};

export default function AlarmsPage() {
  return (
    <section className="rounded-xl border border-zinc-200/60 bg-white/90 p-6">
      <h3 className="mb-4 text-xs font-medium uppercase tracking-wide text-zinc-500">Open alarms</h3>
      <ul className="space-y-3">
        {alarms.map((alarm) => (
          <li key={alarm.id} className="flex items-center justify-between rounded-lg border border-zinc-200/50 px-4 py-3">
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
