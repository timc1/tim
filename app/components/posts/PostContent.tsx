import React from "react";
import { Link } from "remix";
import styles from "./styles.css";

export function PostContent({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <header>
        <Link to="/">Back</Link>
      </header>
      {children}
    </main>
  );
}

PostContent.styles = styles;
