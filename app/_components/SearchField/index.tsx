"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { Suspense } from "react";
import styles from "./index.module.css";

function SearchFieldComponent() {
    // ユーザーのアクションから遷移を行いたいため `useRouter` を使用する.
    const router = useRouter();
    // URL のクエリパラメーターを利用するため `useSearchParams` を使用する.
    const searchParams = useSearchParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // デフォルトの指定された URL へフォームの内容を送る動作をキャンセルする.
        e.preventDefault();
        // input 要素を取り出す.
        const q = e.currentTarget.elements.namedItem("q");
        if (q instanceof HTMLInputElement) {
            // クエリパラメーターを組み立てる.
            const params = new URLSearchParams();
            params.set("q", q.value.trim());
            // submit のイベントから辿って取得した input 要素の value をクエリパラメーターとしてセットして遷移する.
            router.push(`/news/search?${params.toString()}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.search}>
                <Image 
                    src="/search.svg"
                    alt="検索"
                    width={16}
                    height={16}
                    loading="eager"
                />
                <input
                    type="text"
                    name="q"
                    defaultValue={searchParams.get("q") ?? undefined}
                    placeholder="キーワードを入力"
                    className={styles.searchInput}
                />
            </label>
        </form>
    );
}

export default function SearchField() {
    // `useSearchParams` を利用するとこのコンポーネントを利用した箇所もクライアントコンポーネントになってしまうため
    // このコンポーネントのみをクライアントコンポーネントにするため `Suspense` でラップする.
    return (
        <Suspense>
            <SearchFieldComponent />
        </Suspense>
    );
}