import Image from "next/image";
import styles from "./index.module.css";

import Category from "../Category";
import Date from "../Date";
import { News } from "@/app/_libs/microcms";

type Props = {
    data: News;
};

export default function Article({ data }: Props) {
    return (
        <main>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.meta}>
                <Category category={data.category} />
                <Date date={data.publishedAt ?? data.createdAt} />
            </div>
            {data.thumbnail && (
                <Image 
                    src={data.thumbnail.url}
                    alt=""
                    className={styles.thumbnail}
                    width={data.thumbnail.width}
                    height={data.thumbnail.height}
                />
            )}
            {/* `dangerouslySetInnerHTML` は渡した文字列をそのまま HTML として表示する. */}
            {/* 悪用されると XSS 等のセキュリティリスクがあるが、microCMS から取得しているデータなのでリスクを受容して利用している. */}
            {/* 可能であればサニタイズしてからデータを利用する. */}
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                    __html: data.content,
                }}
            />
        </main>
    );
}