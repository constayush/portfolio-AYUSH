import { Highlight, themes } from "prism-react-renderer";
import { ThemeProvider, useTheme } from "../../ThemeContext";
import { useRef } from "react";

export function CodeBlock({ code, language }) {
  const { theme } = useTheme();
  let code_theme;
  if (theme === "dark") {
    code_theme = themes.duotoneDark;
  } else {
    code_theme = themes.oneLight;
  }


const copybtn =useRef(null);
   const copyBtnRef = useRef(null);

  const handleCopy = () => {
    // Copy the text
    navigator.clipboard.writeText(code);

    // Update the button text
    if (copyBtnRef.current) {
      copyBtnRef.current.textContent = 'Copied!';
      setTimeout(() => {
        copyBtnRef.current.textContent = 'Copy';
      }, 2000);
    }
  };

  return (
    <div className="relative">
      <button
      ref={copyBtnRef}
        onClick={handleCopy}
        style={{
          position: 'absolute',
          right: '0',
          top: '0',
          margin: '10px',
          padding: '5px 10px',
          cursor: 'pointer',
        }}
        className="bg-[var(--bg-color)] text-[var(--text-color)] border border-[var(--border-color)] rounded-md"  
      >
        Copy
      </button>   
    <Highlight className="" theme={code_theme} code={code} language={language}>


      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} overflow-x-auto rounded-md p-4 text-sm`}
          style={style}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              <span className="mr-4 inline-block w-5 select-none text-right text-muted-foreground opacity-50">
                {i + 1}
              </span>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight></div>
  );
}
