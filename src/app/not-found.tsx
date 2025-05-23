import Link from "next/link";

export default function NotFound() {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-4">404 - ページが見つかりません</h1>
        <p className="text-gray-700 text-lg mb-8">
          お探しの作品が見つかりませんでした。
        </p>
        <Link
          href="/"
          className="text-blue-500 hover:underline text-lg"
        >
          ← トップページに戻る
        </Link>
      </div>
    );
  }
  