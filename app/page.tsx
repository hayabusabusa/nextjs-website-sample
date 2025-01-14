import Image from "next/image";
import styles from "./page.module.css";

import ButtonLink from "@/app/_components/ButtonLink";
import NewsList from "@/app/_components/NewsList";
import { News } from "@/app/_libs/microcms";

const data: {
  contents: News[]
} = {
  contents: [
    {
      id: "1",
      title: "渋谷にオフィスを移転しました",
      category: {
        name: "更新情報"
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19"
    },
    {
      id: "2",
      title: "当社 CEO が業界リーダー TOP 30 に選出されました",
      category: {
        name: "更新情報"
      },
      publishedAt: "2023/05/19",
      createdAt: "2023/05/19"
    },
    {
      id: "3",
      title: "テストの記事です",
      category: {
        name: "更新情報"
      },
      publishedAt: "2023/04/19",
      createdAt: "2023/04/19"
    }
  ]
}

export default function Home() {
  // 表示件数は 2 件までに絞り込む.
  const slicedData = data.contents.slice(0, 2);

  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
          <p className={styles.description}>
            私たちは市場をリードしているグローバルテックカンパニーです。
          </p>
          <Image
            className={styles.bgimg}
            src="/img-mv.jpg"
            alt=""
            width={4000}
            height={1200}
          />
        </div>
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={slicedData} />
        {/* レイアウトと余白に関してはコンポーネントに含めずに、親要素で指定する方が再利用性が高まる. */}
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
