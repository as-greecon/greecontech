import { sites } from "@/lib/demo-data";

export default function SitesPage() {
  return (
    <section className="rounded-xl border border-zinc-200 bg-white p-6">
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
            <tr key={site.id} className="border-t border-zinc-100">
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
