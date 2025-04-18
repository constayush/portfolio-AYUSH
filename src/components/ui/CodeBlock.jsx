
import { Highlight, themes } from "prism-react-renderer"

export function CodeBlock({ code, language }) {
  const theme =  themes.nightOwl 

  return (
    <Highlight theme={theme} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} overflow-x-auto rounded-md p-4 text-sm`} style={style}>
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
    </Highlight>
  )
}
