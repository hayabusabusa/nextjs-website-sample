import { notFound } from "next/navigation";

import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import Category from "@/app/_components/Category";
import NewsList from "@/app/_components/NewsList";

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: Props) {
    // 存在するカテゴリーかを確認.
    const category = await getCategoryDetail(params.id).catch(notFound);
    // microCMS では `filters` でコンテンツの絞り込みが可能.
    const { contents: news } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        filters: `category[equals]${category.id}`,
    });

    return (
        <>
            <p>
                <Category category={category} /> の一覧
            </p>
            <NewsList news={news} />
        </>
    );
}