import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/duotoneDark';

const InlineCode = ({ children, className, additionalPreClasses, theme }) => {
  className = className ? '' : className;
  const language = className.replace(/language-/, '');
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme || darkTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`docs-code sprk-u-Measure ${className} ${additionalPreClasses}`}
          style={{ ...style }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default InlineCode;
