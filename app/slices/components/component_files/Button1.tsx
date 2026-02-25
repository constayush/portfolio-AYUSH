const SendButton = ({ cta_text, href }: { cta_text: string; href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        relative
        flex items-center justify-center
        overflow-hidden
        rounded-2xl
        bg-[#030406]
        border border-[var(--border-color)]
        px-6 py-3
        text-xl text-white
        transition-all duration-200
        active:scale-95
        cursor-pointer
       
      "
    >
      {/* Arrow */}
      <span
        className="
          absolute left-4
          transition-all duration-300 ease-in-out
          group-hover:left-1/2
          group-hover:-translate-x-1/2
          group-hover:rotate-45
          group-hover:scale-110
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          className="block"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
          />
        </svg>
      </span>

      {/* Text */}
      <span
        className="
          transition-transform duration-300 ml-8 ease-in-out
          group-hover:translate-x-100
        "
      >
        {cta_text}
      </span>
    </a>
  );
};

export default SendButton;