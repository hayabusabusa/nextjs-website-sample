import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import SearchField from "@/app/_components/SearchField";
import Pagination from "@/app/_components/Pagination";

// ISR するためキャッシュの保持期間を 60 sec に設定する.
export const revalidate = 60;

export default async function Page() {
    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
    });

    return (
        <>
            <SearchField />
            <NewsList news={news} />
            <Pagination totalCount={totalCount} />
        </>
    );
}