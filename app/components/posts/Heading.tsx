import React from "react";

export function Heading({ element, children, ...rest }: any) {
  let Tag: React.ComponentType = element || ("p" as any);
  return <Tag {...rest}>{children}</Tag>;
}
