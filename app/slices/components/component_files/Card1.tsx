import Image from "next/image"
import Link from "next/link"

export default function card1({
  title = "Card 1",
  description = "A vercel inspired card component with a floating image and a hover effect.",
  href = "#",
  image_url = "https://plus.unsplash.com/premium_photo-1663954642189-47be8570548e?q=80&w=427&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}) {
  return (
    <Link
      href={href}
      className="
        group
        relative
        h-[300px]
        w-full
        min-w-[220px]
        overflow-hidden
        rounded-md
        border border-gray-300/20
      bg-black
        transition-all duration-100 ease-out
        focus-visible:outline-none
        focus-visible:ring-2 focus-visible:ring-black/40
      "
    >
      {/* Text content */}
      <div className="flex flex-col gap-1 px-6 py-5">
        <div className="flex items-center gap-1 max-w-max">
          <h3 className="text-md font-medium whitespace-nowrap">
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

        <p className="text-sm text-gray-500 line-clamp-2">
          {description}
        </p>
      </div>

      {/* Floating image */}
      <Image
        src={image_url}
        alt={title}
        width={340}
        height={180}
        className="
          absolute
          top-[120px]
          -right-12
          rotate-[-5deg]
          rounded-md
          border-2 border-gray-300/20
          shadow-sm
          object-cover
          transform-gpu
          transition-transform duration-100 ease-out
          group-hover:-rotate-3
          group-hover:-translate-y-1
          group-hover:-translate-x-0.5
        "
      />
    </Link>
  )
}
