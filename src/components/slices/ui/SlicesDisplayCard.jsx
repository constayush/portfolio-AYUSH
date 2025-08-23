import gifTemp from "../../slices/images/tempGif.gif";
import imgTemp from "../../slices/images/tempImg.webp";

function SlicesDisplayCard({ 
  title = "Title", 
  description = "Some description", 
  img = imgTemp,
  gif = gifTemp 
}) {
  return (
    <div className="relative w-[18rem] rounded-lg cursor-pointer">
      {/* Image wrapper */}
      <div className="relative w-full h-[18rem] rounded-md overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-3 hover:shadow-xl">
        {/* Thumbnail (default) */}
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 group-hover:opacity-0"
          src={img}
          alt={`${title} thumbnail`}
        />

        {/* GIF Preview (on hover) */}
        <img
          className="absolute inset-0 w-full h-full object-cover rounded-md transition-opacity duration-300 opacity-0 hover:opacity-100"
          src={gif}
          alt={`${title} preview`}
        />
      </div>

      {/* Info section */}
      <div className="relative mt-2">
        <h2 className="font-semibold text-[var(--slices-primary-text)]">
          {title}
        </h2>      
        <p className="text-[var(--slices-secondary-text)]">{description}</p>
      </div>
    </div>
  );
}

export default SlicesDisplayCard;
