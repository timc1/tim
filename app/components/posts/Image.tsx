import React from "react";

export function Image(
  props: React.InputHTMLAttributes<HTMLImageElement> & { loading?: string }
) {
  // @ts-ignore
  return <img {...props} />;
}
