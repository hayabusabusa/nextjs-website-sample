"use client";

import cx from "classnames";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./index.module.css";

export default function Menu() {
    // `useState` などの UI 操作によって状態を更新したい場合は Client Side Component として実装する必要がある.
    const [isOpen, setOpen] = useState(false);

    return (
        <div>
            <nav className={cx(styles.nav, isOpen && styles.open)}>
                <ul className={styles.items}>
                    <li>
                        <Link href="/news">ニュース</Link>
                    </li>
                    <li>
                        <Link href="/members">メンバー</Link>
                    </li>
                    <li>
                        <Link href="/contact">お問い合わせ</Link>
                    </li>
                </ul>
                <button 
                    className={cx(styles.button, styles.close)}
                    onClick={() => setOpen(false)}
                >
                    <Image
                        src="/close.svg"
                        alt="閉じる"
                        width={24}
                        height={24}
                        priority
                    />
                </button>
            </nav>
            <button 
                className={styles.button} 
                onClick={() => setOpen(true)}
            >
                <Image
                    src="/menu.svg"
                    alt="メニュー"
                    width={24}
                    height={24}
                />
            </button>
        </div>
    );
}