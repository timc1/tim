import React from "react";

export function Heading({ element, children }: any) {
  let Tag: React.ComponentType = element || ("p" as any);
  return <Tag>{children}</Tag>;
}
