const SendButton = ({ cta_text }: { cta_text: string }) => {
  return (
    console.log(cta_text),
    <>
      {/* <style>{`

.cta_text{
transition: transform 0.3s ease-in-out;
}

group:hover .cta_text {
  background: linear-gradient(90deg, #ff7e5f, #feb47b);
}

        @keyframes fly {
          from { transform: translateY(0.1em); }
          to { transform: translateY(-0.1em); }
        }
      `}</style>

      <button
        className="
          group
          flex items-center
          overflow-hidden
          rounded-2xl
          bg-[#030406]
          border border-[var(--border-color)]
          px-4 py-3
          text-xl text-white
          transition-all duration-200
          active:scale-95
          cursor-pointer
          max-w-40
        "
      >
        <div className="mr-1 flex">
          <div className="group-hover:[animation:fly_0.6s_ease-in-out_infinite_alternate]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="
                block
                transition-transform duration-300 ease-in-out
                group-hover:translate-x-[1.2em]
                group-hover:rotate-45
                group-hover:scale-110
              "
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
              />
            </svg>
          </div>
        </div>

        <span
          className="cta_text transition-all duration-1000 ease
          group-hover:translate-x-[4.8em]
            ml-1 block          
          "
        >
          {cta_text}
        </span>
      </button> */}
    </>
  );
};

export default SendButton;
