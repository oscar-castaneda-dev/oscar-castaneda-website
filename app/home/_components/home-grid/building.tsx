import Link from "next/link";

import { StatusDot } from "@/app/components/ui/status-dot";

export function Building() {
  return (
    <Link
      href="/building"
      className="bg-green-surface rounded-lg p-5 flex flex-col justify-between min-h-40 border border-green-border transition-colors duration-200 hover:border-green-600/40 hover:bg-[#0d1f10]"
      style={{ gridArea: "building" }}
    >
      <div className="flex items-center gap-x-2">
        <StatusDot />
        <p className="text-green-muted text-xs uppercase">currently building</p>
      </div>
      <div>
        <h3 className="heading-36 mb-1 uppercase text-green-400">
          Data as a Service
        </h3>
        <p className="text-xs uppercase text-green-muted">
          Side Project - 2026
        </p>
      </div>
    </Link>
  );
}
