import React from "react";

import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

type Props = {
    children: React.ReactNode;
};

// ニュース関連のページは全て ISR でキャッシュの有効期間を 60 sec に設定する.
export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
    return (
        <>
            <Hero title="News" sub="ニュース" />
            <Sheet>{children}</Sheet>
        </>
    );
};