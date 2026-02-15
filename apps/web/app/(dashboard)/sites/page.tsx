import { sites } from "@/lib/demo-data";

export default function SitesPage() {
  return (
    <section className="rounded-xl border border-zinc-200/60 bg-white/90 p-6">
      <h3 className="mb-4 text-xs font-medium uppercase tracking-wide text-zinc-500">Sites</h3>
      <table className="w-full text-left text-sm">
        <thead className="text-zinc-500">
          <tr>
            <th className="pb-3 font-medium">ID</th>
            <th className="pb-3 font-medium">Site</th>
            <th className="pb-3 font-medium">Region</th>
            <th className="pb-3 font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="text-zinc-700">
          {sites.map((site) => (
            <tr key={site.id} className="border-t border-zinc-200/50">
              <td className="py-3">{site.id}</td>
              <td className="py-3">{site.name}</td>
              <td className="py-3">{site.region}</td>
              <td className="py-3">{site.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
