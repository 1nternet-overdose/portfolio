'use client';

// Next.jsの画像最適化コンポーネント
import Image from "next/image";
// ページ遷移用のリンクコンポーネント
import Link from "next/link";
// アニメーションライブラリ
import { motion } from "framer-motion";
// 個人開発セクション用のカードコンポーネント
import WorkCard from "../components/WorkCard";
// サークル活動セクション用のカードコンポーネント
import CircleCard from "../components/CircleCard";
// GitHubアイコン
import { FaGithub } from "react-icons/fa";
// スクロール参照用のReactフック
// → useRef ... DOM参照や変数の永続化に使用/非再レンダリングで値を保持
import { useRef } from "react";

// 個人開発セクションのデータ配列
const devItems = [
  // { title: "作品タイトル（表示用）", description: "概要", image: "サムネイル画像のパス（publicディレクトリ基準）", slug: "動的ルーティングでURLの末尾として使用される一意の識別子" }
  { title: "小見出しA", description: "紹介文A", image: "/noimage.png", slug: "dev-a" },
  { title: "小見出しB", description: "紹介文B", image: "/noimage.png", slug: "dev-b" },
  { title: "小見出しC", description: "紹介文C", image: "/noimage.png", slug: "dev-c" },
  { title: "小見出しD", description: "紹介文D", image: "/noimage.png", slug: "dev-d" },
  { title: "小見出しE", description: "紹介文E", image: "/noimage.png", slug: "dev-e" },
];

// サークル活動セクションのデータ配列
const circleItems = [
  // { title: "作品タイトル（非表示）", image: "サムネイル画像のパス（publicディレクトリ基準）", description: "概要", slug: "動的ルーティングでURLの末尾として使用される一意の識別子" }
  { title: "poster-2025-04", image: "/poster-2025-04.png", description: "サークル紹介ポスター", slug: "poster-2025-04" },
  { title: "flyer-2025-04", image: "/flyer-2025-04.png", description: "新歓用配布チラシ", slug: "flyer-2025-04" },
  { title: "card-2024-11", image: "/card-2024-11.png", description: "文化祭カード（2024年版）", slug: "card-2024-11" },
  { title: "タイトルD", image: "/noimage.png", description: "紹介文D", slug: "circle-d" },
  { title: "タイトルE", image: "/noimage.png", description: "紹介文E", slug: "circle-e" },
  { title: "タイトルF", image: "/noimage.png", description: "紹介文F", slug: "circle-f" },
  { title: "タイトルG", image: "/noimage.png", description: "紹介文G", slug: "circle-g" },
  { title: "タイトルH", image: "/noimage.png", description: "紹介文H", slug: "circle-h" },
];

export default function Home() {
  // 各セクションの参照を定義
  const portfolioRef = useRef(null);
  const devRef = useRef(null);
  const circleRef = useRef(null);

  return (
    <main className="bg-white text-gray-800">
      {/* プロフィール */}
      <motion.section
        // <section>要素に対して中央寄せ・全画面表示・余白や背景色を定義
        // → min-h-screen   ... 高さを画面の高さ（100vh）に最低限設定
        // → flex           ... 要素をFlexboxの親要素（コンテナ）に設定
        // → flex-col       ... Flexboxで子要素を垂直方向（column）に並べる
        // → items-center   ... 子要素を水平方向に中央揃え
        // → justify-center ... 子要素を垂直方向に中央揃え
        // → text-center    ... テキストを中央揃え（子要素にも適用）
        // → px-4           ... 左右それぞれに16px（=px-4=1rem=16*1px）のパディング（余白）
        // → py-20          ... 上下それぞれに80px（=py-20=5rem=16*5px）のパディング（余白）
        // → bg-gray-50     ... 背景色をグレーに設定
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-gray-50"
        
        // 初期状態（画面外）での表示を定義
        // → opacity: 0 ... 完全に非表示
        // → y: 40      ... 垂直方向-40pxの位置に配置
        initial={{ opacity: 0, y: 40 }}

        // 画面内に入った際（アニメーション後）の表示を定義
        // → opacity: 1 ... 完全に表示
        // → y: 0       ... 垂直方向のずれを修正
        whileInView={{ opacity: 1, y: 0 }}

        // アニメーションの発火タイミングを定義
        // → once: false ... 画面外→画面内の動きがあれば再びアニメーションを発火
        // → amount: 0.3 ... 要素の30%が画面内に入ったタイミングでアニメーションを発火
        viewport={{ once: false, amount: 0.3 }}

        // アニメーションの時間とイージング（動き方）を定義
        // → duration: 0.6   ... 0.6秒かけてアニメーションが実行
        // → ease: "easeOut" ... アニメーションの速度変化を指定/徐々に減速
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* プロフィール画像 */}
        <Image
          // プロフィール画像のパス（publicディレクトリ基準）
          src="/profile.png"
          // 画像が読み込めなかった場合に表示される代替テキスト（アクセシビリティ対応）
          alt="プロフィール画像"
          // 表示幅（px）
          width={140}
          // 表示高さ（px）
          height={140}
          // プロフィール画像の表示スタイルを定義
          // → rounded-full ... 円形切り抜き
          // → shadow-gl    ... 影付き
          // → mb-6         ... 下部マージン（24px）
          className="rounded-full shadow-gl mb-6"
        />

        {/* 名前 */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="block">立川 ことね</span>
          <span className="block">Kotone Tachikawa</span>
        </h1>

        {/* 自己紹介文 */}
        <p className="text-lg text-gray-600 max-w-xl">自己紹介文</p>

        {/* GitHubリンク */}
        <div className="flex justify-center mt-10">
          <a
            href="https://github.com/1nternet-overdose"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black text-4xl transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </motion.section>

      {/* 概要 */}
      <motion.section
        ref={portfolioRef}
        className="px-4 py-16 bg-white max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-semibold mb-4">概要</h2>
        <p className="text-gray-700 text-base leading-relaxed">紹介文</p>
      </motion.section>

      {/* 個人開発 - WorkCardコンポーネントを利用 */}
      <motion.section
        ref={devRef}
        className="px-4 py-16 bg-white max-w-5xl mx-auto"

        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">個人開発</h2>
        <p className="text-center text-gray-600 mb-8">クリックすると詳細ページに移動します。</p>

        {/* devItemsを1つずつWorkCardとしてレンダリング */}
        <div className="grid gap-8 md:grid-cols-2">
          {devItems.map((item) => (
            <Link key={item.slug} href={`/dev/${item.slug}`}>
              <div className="transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                <WorkCard title={item.title} description={item.description} />
              </div>
            </Link>
          ))}
        </div>
      </motion.section>

      {/* サークル活動 - サムネイルを正方形で表示 */}
      <motion.section
        ref={circleRef}
        className="px-4 py-16 bg-gray-50 max-w-6xl mx-auto"
        
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">サークル活動</h2>
        <p className="text-center text-gray-600 mb-8">クリックすると詳細ページに移動します。</p>

        {/* 4列表示でカードを表示（レスポンシブ対応） */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {circleItems.map((card) => (
            <Link key={card.slug} href={`/circle/${card.slug}`}>
              <div className="rounded-lg overflow-hidden aspect-square cursor-pointer transform transition-transform hover:scale-105 hover:shadow-lg">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
