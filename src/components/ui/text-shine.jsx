import clsx from "clsx";

export default function TextShine({text="ayush" , className}) {
  return (
    <>
      <style>
        {`
          @keyframes text-shine {
            0% { background-position: -150% 0; }
            100% { background-position: 150% 0; }
          }
          .text-shine {
            animation: text-shine 4s linear infinite;
          }
        `}
      </style>
      <span
        className={clsx(
          `bg-[linear-gradient(125deg,#FE8808_20%,#ffffff_40%,#FE8808_60%)] bg-[length:300%_100%] bg-clip-text text-transparent text-shine`,
          className
        )}
      >
        {text}
      </span>
    </>
  );
}
