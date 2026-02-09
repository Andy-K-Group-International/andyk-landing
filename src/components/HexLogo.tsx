/* eslint-disable @next/next/no-img-element */
import { COMPANY } from "@/lib/data";

export default function HexLogo({ size = "md" }: { size?: "sm" | "md" }) {
  const h = size === "sm" ? "h-8" : "h-12";
  return (
    <a href="#hero" className="flex items-center gap-2">
      <img src={COMPANY.logoUrl} alt={COMPANY.name} className={`${h} w-auto`} />
    </a>
  );
}
