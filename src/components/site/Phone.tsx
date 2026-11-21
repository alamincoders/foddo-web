import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  /** Screens stacked on top of each other; only the one at `index` is visible. */
  srcs: string[];
  index?: number;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** A phone made of CSS around real screenshots. Width drives everything, so it scales cleanly. */
export function Phone({ srcs, index = 0, alt, className, sizes = "(min-width: 1024px) 320px, 70vw", priority }: Props) {
  return (
    <div
      className={cn("relative aspect-[540/1150] w-full bg-[#0b130f] shadow-[0_30px_70px_-20px_rgba(10,30,20,0.45)]", className)}
      style={{ borderRadius: "13% / 6.1%", padding: "3.2%" }}
    >
      <div className="relative h-full w-full overflow-hidden bg-background" style={{ borderRadius: "10% / 4.7%" }}>
        {srcs.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={i === index ? alt : ""}
            aria-hidden={i !== index}
            fill
            sizes={sizes}
            priority={priority && i === 0}
            className={cn("object-cover object-top transition-opacity duration-500", i === index ? "opacity-100" : "opacity-0")}
          />
        ))}
      </div>
      <span
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-[#0b130f]"
        style={{ top: "4.6%", width: "4.2%", aspectRatio: "1" }}
      />
    </div>
  );
}
