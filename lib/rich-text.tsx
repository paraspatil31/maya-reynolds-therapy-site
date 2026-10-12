import React, { Fragment } from "react";

/**
 * Renders rich-text markup used in content/site.ts:
 *   {{word}}        → <span class="script-accent">word</span>
 *   {{em:text}}     → <em>text</em>
 *
 * If scriptAmpersand is true, standalone "&" is also styled with the script font.
 * All other text is returned as-is.
 */
export function RichText({
  text,
  scriptAmpersand = false,
}: {
  text: string;
  scriptAmpersand?: boolean;
}): React.ReactElement {
  // Split on {{ ... }}
  const parts = text.split(/(\{\{[^}]+\}\})/g);

  return (
    <Fragment>
      {parts.map((part, i) => {
        // Script accent: {{word}}
        const scriptMatch = part.match(/^\{\{(?!em:)([^}]+)\}\}$/);
        if (scriptMatch) {
          return (
            <span key={i} className="script-accent">
              {scriptMatch[1]}
            </span>
          );
        }

        // Italic: {{em:text}}
        const emMatch = part.match(/^\{\{em:([^}]+)\}\}$/);
        if (emMatch) {
          return <em key={i}>{emMatch[1]}</em>;
        }

        // Check if ampersand should be rendered with script font
        if (scriptAmpersand && part.includes("&")) {
          const subParts = part.split(/(&)/g);
          return (
            <Fragment key={i}>
              {subParts.map((sub, j) =>
                sub === "&" ? (
                  <span key={j} className="script-accent text-[1.25em] font-normal mx-1">
                    &amp;
                  </span>
                ) : (
                  sub
                )
              )}
            </Fragment>
          );
        }

        return <Fragment key={i}>{part}</Fragment>;
      })}
    </Fragment>
  );
}
