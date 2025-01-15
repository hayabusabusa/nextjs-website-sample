import React from "react";
import styles from "./page.module.css";

type Props = {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
    return (
        <>
            <div className={styles.container}>{children}</div>
        </>
    );
}