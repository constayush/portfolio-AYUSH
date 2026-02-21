import Image from "next/image";
import Link from "next/link";

export default function card1({
  title = "Card 1",
  description = "A drawer card component with a floating image and a hover effect.",
  href = "#",
  image_url = "https://plus.unsplash.com/premium_photo-1671751033625-46175f2eb03d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D",
}) {
  return (
    <>
      <style>
        {`
.parent-group:hover .rotating-image {

  transform:  translateY(100px);

}
.rotating-image {
  transition: transform 0.4s ease-out;
}`}
      </style>
      <Link
        href={href}
        className="
        parent-group
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
            <h3 className="text-md font-semibold text-white whitespace-nowrap">{title}</h3>

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

          <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
         
         <div className="w-10">
          <Image
            src={image_url}
            alt={title}
            fill={true}
            className="
          rotating-image
          rounded-md
          border-2 border-gray-300/20
          shadow-sm
          object-cover
          aspect-square
         
        "
          /></div>



        </div>

        {/* Floating image */}
      </Link>
    </>
  );
}
