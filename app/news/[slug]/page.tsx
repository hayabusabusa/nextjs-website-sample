import { notFound } from "next/navigation";
import styles from "./page.module.css";

import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import { getNewsDetail } from "@/app/_libs/microcms";


type Props = {
    params: {
        slug: string;
    },
    searchParams: {
        dk?: string;
    },
};

export default async function Page({ params, searchParams }: Props) {
    // データが取得できない無効な ID だった場合は not found ページを表示する.
    const data = await getNewsDetail(params.slug, {
        draftKey: searchParams.dk,
    }).catch(notFound);

    return (
        <>
            <Article data={data} />
            <div className={styles.footer}>
                <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
            </div>
        </>
    );
}