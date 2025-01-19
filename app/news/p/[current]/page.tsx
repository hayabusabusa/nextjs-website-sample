import { notFound } from "next/navigation";

import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";

type Props = {
    params: {
        current: string;
    };
};

export default async function Page({ params }: Props) {
    const current = parseInt(params.current, 10);

    // ページ番号が数字でないか、1 未満の場合は 404 を返す.
    if (Number.isNaN(current) || current < 1) {
        notFound();
    }

    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        offset: NEWS_LIST_LIMIT * (current - 1),
    });

    // データが空の場合は 404 を返す.
    if (news.length === 0) {
        notFound();
    }

    return (
        <>
            <NewsList news={news} />
            <Pagination totalCount={totalCount} current={current} />
        </>
    );
}