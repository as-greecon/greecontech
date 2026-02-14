export function EmptyState({ title, description }: { title: string; description: string }) {
  return (
    <section className="rounded-xl border border-zinc-200 bg-white p-10 text-center">
      <h3 className="text-base font-medium text-zinc-900">{title}</h3>
      <p className="mt-2 text-sm text-zinc-500">{description}</p>
    </section>
  );
}
