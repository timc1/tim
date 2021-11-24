import React from "react";
import styles from "./styles.css";

export function PostContent({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}

PostContent.styles = styles;
