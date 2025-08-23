import gifTemp from "../../slices/images/tempGif.gif";

function SlicesDisplayCard({ 
  title = "Title", 
  description = "Some description", 
  gif = gifTemp 
}) {
  return (
    <div className="w-[18rem] p-3 border rounded-lg">
      <img 
        className="w-full h-[18rem] object-cover rounded-md" 
        src={gif} 
        alt={title} 
      />
      <h2 className="mt-2 font-semibold text-[var(--slices-primary-text)]">{title}</h2>      
      <p className="text-[var(--slices-secondary-text)]">{description}</p>
    </div>
  );
}

export default SlicesDisplayCard;

