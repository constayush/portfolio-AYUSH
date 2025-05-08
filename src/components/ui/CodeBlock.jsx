
import { Highlight, themes } from "prism-react-renderer"
import { ThemeProvider, useTheme } from "../../ThemeContext"
export function CodeBlock({ code, language }) {

   
 const { theme } = useTheme()
let code_theme;
 if( theme === 'dark') {
code_theme =  themes.duotoneDark
 }
 else {
 code_theme =  themes.oneLight
 }
  return (
    <Highlight theme={code_theme} code={code}  language={language}>
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
