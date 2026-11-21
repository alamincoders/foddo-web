import { GooglePlayIcon } from "@/components/ui/GooglePlayIcon";
import { PLAY_STORE_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PlayButton({ label, className, tone = "green" }: { label: string; className?: string; tone?: "green" | "white" }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-3 rounded-2xl px-6 py-3.5 text-base font-bold transition active:scale-[0.98]",
        tone === "green" ? "bg-primary text-white hover:bg-[#125c3b]" : "bg-white text-[#0E4F34] hover:bg-[#EAF3EC]",
        className,
      )}
    >
      <GooglePlayIcon className="h-5 w-5 shrink-0" />
      <span>{label}</span>
    </a>
  );
}
