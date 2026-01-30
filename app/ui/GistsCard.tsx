import Link from "next/link";
import Image from "next/image";

interface GistsCardProps {
  
  gistName: string;
  gistShortDescription: string;
  gistTags?: string[];
}

function GistsCard(props: GistsCardProps) {
  return (
    <Link 
      href="/slices/introduction" 
      className="card px-4 py-6 gap-4 relative grow overflow-hidden porject-card min-h-full group min-w-full transition-all bg-[var(--glass-bg-color)] text-[var(--text-color)] group border-2 shadow-2xl border-[#ffffff10] rounded-lg"
    >
      <div className="shine"></div>
      <span className="flex flex-wrap justify-between">
        <h1 className="text-[1.4rem] opacity-[.9] font-medium">
          # {props.gistName}
        </h1>
        <Image
          src="/right-arrow.svg"
          width={32}
          height={32}
          className="w-8 shadow-2xl grayscale group-hover:border-[#ff8400] border border-[#fff0] rounded-full p-1 transition duration-300"
          alt="->"
        />
      </span>
      <p className="opacity-85">{props.gistShortDescription}</p>

      <div className="flex gap-2 flex-wrap">
        {props?.gistTags?.map((tag) => {
          return (
            <span 
              key={tag} 
              className="tag border border-[var(--border-color)] hover:bg-[#636363a4] text-[.75rem] rounded-3xl px-3 py-1"
            >
              {tag}
            </span>
          );
        })}
      </div>
    </Link>
  );
}

export default GistsCard;