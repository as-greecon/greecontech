import { assets } from "@/lib/demo-data";

export default function AssetsPage() {
  return (
    <section className="rounded-xl border border-zinc-200/60 bg-white/90 p-6">
      <h3 className="mb-4 text-xs font-medium uppercase tracking-wide text-zinc-500">Assets</h3>
      <table className="w-full text-left text-sm">
        <thead className="text-zinc-500">
          <tr>
            <th className="pb-3 font-medium">ID</th>
            <th className="pb-3 font-medium">Asset</th>
            <th className="pb-3 font-medium">Site</th>
            <th className="pb-3 font-medium">Category</th>
          </tr>
        </thead>
        <tbody className="text-zinc-700">
          {assets.map((asset) => (
            <tr key={asset.id} className="border-t border-zinc-200/50">
              <td className="py-3">{asset.id}</td>
              <td className="py-3">{asset.name}</td>
              <td className="py-3">{asset.site}</td>
              <td className="py-3">{asset.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
