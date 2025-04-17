'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import WorkCard from "../components/WorkCard";
import CircleCard from "../components/CircleCard";
import { FaGithub } from "react-icons/fa";
import { useRef } from "react";

const devItems = [
  {
    title: "小見出しA",
    description: "紹介文A",
    image: "/noimage.png",
    slug: "dev-a",
  },
  {
    title: "小見出しB",
    description: "紹介文B",
    image: "/noimage.png",
    slug: "dev-b",
  },
  {
    title: "小見出しC",
    description: "紹介文C",
    image: "/noimage.png",
    slug: "dev-c",
  },
  {
    title: "小見出しD",
    description: "紹介文D",
    image: "/noimage.png",
    slug: "dev-d",
  },
  {
    title: "小見出しE",
    description: "紹介文E",
    image: "/noimage.png",
    slug: "dev-e",
  },
];

const circleItems = [
  {
    title: "poster-2025-04",
    image: "/poster-2025-04.png",
    description: "サークル紹介ポスター",
    slug: "poster-2025-04",
  },
  {
    title: "flyer-2025-04",
    image: "/flyer-2025-04.png",
    description: "新歓用配布チラシ",
    slug: "flyer-2025-04",
  },
  {
    title: "card-2024-11",
    image: "/card-2024-11.png",
    description: "文化祭カード（2024年版）",
    slug: "card-2024-11",
  },
  {
    title: "タイトルD",
    image: "/noimage.png",
    description: "紹介文D",
    slug: "circle-d"
  },
  {
    title: "タイトルE",
    image: "/noimage.png",
    description: "紹介文E",
    slug: "circle-e"
  },
  {
    title: "タイトルF",
    image: "/noimage.png",
    description: "紹介文F",
    slug: "circle-f"
  },
  {
    title: "タイトルG",
    image: "/noimage.png",
    description: "紹介文G",
    slug: "circle-g"
  },
  {
    title: "タイトルH",
    image: "/noimage.png",
    description: "紹介文H",
    slug: "circle-h"
  },
];

export default function Home() {
  const portfolioRef = useRef(null);
  const devRef = useRef(null);
  const circleRef = useRef(null);

  return (
    <main className="bg-white text-gray-800">
      {/* プロフィール */}
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 bg-gray-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/profile.png"
          alt="プロフィール画像"
          width={140}
          height={140}
          className="rounded-full shadow-lg mb-6"
        />
        <h1 className="text-3xl md:text-4xl font-bold mb-4">名前</h1>
        <p className="text-lg text-gray-600 max-w-xl">自己紹介文</p>
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
        <p className="text-gray-700 text-base leading-relaxed">
          紹介文
        </p>
      </motion.section>

      {/* 個人開発 */}
      <motion.section
        ref={devRef}
        className="px-4 py-16 bg-white max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">個人開発</h2>
        <p className="text-center text-gray-600 mb-8">クリックすると詳細ページに移動します。</p>
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

      {/* サークル活動 */}
      <motion.section
        ref={circleRef}
        className="px-4 py-16 bg-gray-50 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">サークル活動</h2>
        <p className="text-center text-gray-600 mb-8">クリックすると詳細ページに移動します。</p>
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

      {/* ポップアップモーダル */}
      {/**
      {popupItem && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-5xl relative flex flex-col md:flex-row gap-6">
            <button
              className="absolute top-2 right-4 text-2xl font-bold text-gray-600 hover:text-black"
              onClick={() => setPopupItem(null)}
            >
              ×
            </button>
            <div className="md:w-1/2">
              <Image
                src={popupItem.image}
                alt={popupItem.title}
                width={600}
                height={400}
                className="w-full h-auto object-contain rounded"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">{popupItem.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{popupItem.description}</p>
            </div>
          </div>
        </div>
      )}
      */}
    </main>
  );
}
