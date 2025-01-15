import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const data = {
    contents: [
        {
            id: "1",
            image: {
                url: "/img-member1.jpg",
                width: 240,
                height: 240,
            },
            name: "デイビッド・チャン",
            position: "CEO",
            profile: "グローバルテクノロジー企業での豊富な経験を持つリーダー。以前は大手ソフトウェア企業の上級幹部として勤務し、新市場進出や収益成長に成功。自身の経験と洞察力により、業界のトレンドを見極めて戦略的な方針を策定し、会社の成長を牽引している。"
        },
        {
            id: "2",
            image: {
                url: "/img-member2.jpg",
                width: 240,
                height: 240,
            },
            name: "ジェーン・スミス",
            position: "CFO",
            profile: "ファイナンス業界での経験を活かし、会社の財務戦略を担当。大手金融機関での勤務経験を持ち、財務分析や資金調達に精通。会社の財務状況をしっかりと把握し、リスクを最小限に抑えながら成長を支えている。"
        },
        {
            id: "3",
            image: {
                url: "/img-member3.jpg",
                width: 240,
                height: 240,
            },
            name: "ジョン・ウィルソン",
            position: "CTO",
            profile: "テクノロジー業界での経験を活かし、会社の技術戦略を担当。大手IT企業での勤務経験を持ち、ソフトウェア開発やシステム構築に精通。最新のテクノロジーを取り入れ、会社の競争力を高めるための施策を提案している。"
        }
    ]
};

export default function Page() {
    return (
        <div className={styles.container}>
            {data.contents.length === 0 
                ? (
                    <p className={styles.empty}>メンバーが登録されていません。</p>
                ) 
                : (
                    <ul>
                        {data.contents.map((member) => (
                            <li key={member.id} className={styles.list}>
                                <Image 
                                    src={member.image.url}
                                    alt=""
                                    width={member.image.width}
                                    height={member.image.height}
                                    className={styles.image}
                                />
                                <dl>
                                    <dt className={styles.name}>{member.name}</dt>
                                    <dd className={styles.position}>{member.position}</dd>
                                    <dd className={styles.profile}>{member.profile}</dd>
                                </dl>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
}