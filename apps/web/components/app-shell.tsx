"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Bot, FileText, LayoutDashboard, MapPin, Search, Settings, ShieldAlert, TreePine } from "lucide-react";
import { ReactNode } from "react";

const navItems = [
  { href: "/overview", label: "Overview", icon: LayoutDashboard },
  { href: "/sites", label: "Sites", icon: MapPin },
  { href: "/assets", label: "Assets", icon: TreePine },
  { href: "/alarms", label: "Alarms", icon: ShieldAlert },
  { href: "/automations", label: "Automations", icon: Bot },
  { href: "/reports", label: "Reports", icon: FileText },
  { href: "/settings", label: "Settings", icon: Settings }
];

export function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const active = navItems.find((item) => pathname.startsWith(item.href));

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="mx-auto flex w-full max-w-[1440px]">
        <aside className="sticky top-0 h-screen w-64 border-r border-zinc-200/80 bg-white/80 p-6">
          <h1 className="mb-8 text-lg font-semibold tracking-tight text-greecon-deep">
  Greecon Platform
</h1>

          <nav className="space-y-1">
            {navItems.map(({ href, label, icon: Icon }) => {
  const isActive = pathname === href || pathname.startsWith(href);
  return (
    <Link
      key={href}
      href={href}
      className={[
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
        isActive
          ? "bg-greecon-deep/10 text-greecon-primary"
          : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900",
      ].join(" ")}
    >
      <Icon className="h-4 w-4" />
      {label}
    </Link>
  );
})}

          </nav>
        </aside>

        <div className="flex-1">
          <header className="sticky top-0 z-10 border-b border-zinc-200/80 bg-zinc-50/90 px-8 py-4 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
              <div className="flex items-center gap-3 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-500">
                <Search className="h-4 w-4" />
                <span>Search assets, alarms, telemetry...</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-600">
                <button className="rounded-lg border border-zinc-200 bg-white px-3 py-2">Site: All sites</button>
                <button className="rounded-lg border border-zinc-200 bg-white p-2">
                  <Bell className="h-4 w-4" />
                </button>
                <button className="rounded-lg border border-zinc-200 bg-white px-3 py-2">Ops Admin</button>
              </div>
            </div>
          </header>

          <main className="px-8 py-8">
            <div className="mx-auto max-w-5xl">
              <h2 className="mb-6 text-2xl font-semibold tracking-tight text-zinc-900">{active?.label ?? "Dashboard"}</h2>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
