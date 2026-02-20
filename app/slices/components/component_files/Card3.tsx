import Image from "next/image";
import Link from "next/link";

export default function card2({
  title = "Card 3",
  description = "A card component with CTA on hover effect. lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  href = "#",
  image_url = "https://plus.unsplash.com/premium_photo-1663954645420-f34df6dcd26e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM1fHx8ZW58MHx8fHx8",
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="
      shadow-lg
        group
        relative
        h-fit
        w-full
        min-w-[220px]
        overflow-hidden
        rounded-md
        border border-[var(--border-color)]/20
       bg-[var(--bg-color)]
        transition-all duration-100 ease-out
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-black/40
      "
    >
      {/* <Image
        className="absolute z-0 w-full h-full blur-sm "
        src={image_url}
        alt={title}
        width={340}
        height={180}
      ></Image> */}
      {/* Text content */}
      <div className="flex w-full h-full justify-end z-99 flex-col gap-1 px-6 py-5">
        <div className="flex items-center gap-1 max-w-max">
          <h3 className="text-xl z-1 text-[var(--text-color)]/80 font-semibold whitespace-nowrap">
            {title}
          </h3>

          {/* Arrow */}
          <span
            className="
              inline-block
              opacity-0
              translate-x-[-2px]
              rotate-[-45deg]
              transition-all duration-100 ease-out
              group-hover:opacity-100
              group-hover:translate-x-1
            "
          >
            →
          </span>
        </div>

        <p className="text-sm z-1 text-[var(--secondary-text)]">{description}</p>

    
      </div>
    </Link>
  );
}
