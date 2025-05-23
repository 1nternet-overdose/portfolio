'use client';

import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DevDetailPage({ params }: { params: { slug: string } }) {
  const devData: Record<string, { title: string; image: string; description: string }> = {
    "dev-a": { title: "小見出しA", image: "/noimage.png", description: "紹介文A" },
    "dev-b": { title: "小見出しB", image: "/noimage.png", description: "紹介文B" },
    "dev-c": { title: "小見出しC", image: "/noimage.png", description: "紹介文C" },
    "dev-d": { title: "小見出しD", image: "/noimage.png", description: "紹介文D" },
  };

  const slug = params.slug as keyof typeof devData;
  const work = devData[slug];
  if (!work) notFound();

  return (
    <motion.div
      className="max-w-6xl mx-auto px-4 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="w-full">
          <Image
            src={work.image}
            alt={work.title}
            width={800}
            height={1200}
            className="w-full h-auto object-contain rounded shadow"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
          <p className="text-gray-700 leading-relaxed">{work.description}</p>
        </div>
      </div>
      <Link href="/" className="text-blue-500 hover:underline block mt-12 text-center">
        ← トップに戻る
      </Link>
    </motion.div>
  );
}
