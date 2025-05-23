import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";

// 事前ビルド用のデータ
const circleData: Record<string, { title: string; image: string; description: string }> = {
  "poster-2025-04": {
    title: "サークル紹介ポスター",
    image: "/poster-2025-04.png",
    description: "説明文",
  },
  "flyer-2025-04": {
    title: "新歓用配布チラシ",
    image: "/flyer-2025-04.png",
    description: "説明文",
  },
  "poster-2025-05": {
    title: "文化の祭典ポスター",
    image: "/poster-2025-05.png",
    description: "紹介文D",
  },
  "flyer-2025-05": {
    title: "文化の祭典チラシ",
    image: "/flyer-2025-05.png",
    description: "説明文",
  },
  "poster-2025-11": {
    title: "タイトルF",
    image: "/poster-2025-11.png",
    description: "紹介文F",
  },
  "flyer-2025-11": {
    title: "タイトルG",
    image: "/flyer-2025-11.png",
    description: "紹介文G",
  },
  "card-2024-11": {
    title: "文化祭カード（2024年版）",
    image: "/card-2024-11.png",
    description: "説明文",
  },
  "name_tag-2025-05": {
    title: "サークル名札",
    image: "/name_tag-2025-05.png",
    description: "紹介文E",
  },
  "number_card": {
    title: "タイトルH",
    image: "/number_card.jpg",
    description: "紹介文H",
  },
};

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const work = circleData[slug as keyof typeof circleData];

  if (!work) notFound();

  return (
    <div
      className="max-6xl mx-auto px-4 py-16"
    >
      <div className="grid md:grid-cols-2 gap-18 items-start">
        {/* 左側：画像 */}
        <div className="w-full">
          <Image
            src={work.image}
            alt={work.title}
            width={800}
            height={1200}
            className="w-full h-auto object-contain rounded shadow"
          />
        </div>
      
        {/* 右側：タイトル・説明 */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
          <p className="text-gray-700 leading-relaxed">{work.description}</p>
        </div>
      </div>
    
      {/* トップに戻る */}
      <Link href="/" className="text-blue-500 hover:underline block mt-12 text-center">
        ← トップに戻る
      </Link>
    </div>
  );
}
