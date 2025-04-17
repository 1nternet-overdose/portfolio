import Link from "next/link";

type CircleCardProps = {
  title: string;
  image: string;
  description: string;
  slug: string;
};

export default function CircleCard({ title, image, description, slug }: CircleCardProps) {
  return (
    <Link
      href={`/circle/${slug}`}
      className="block min-w-[200px] relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
    >
    <img
        src={image}
        alt={title}
        className="w-[200px] h-[150px] object-contain bg-white"
    />


      {/* ホバー時に表示されるタイトルオーバーレイ */}
      <div className="absolute inset-0 bg-black bg-opacity-60 text-white opacity-0 hover:opacity-100 flex items-center justify-center p-4 transition">
        <p className="text-sm">{description}</p>
      </div>

      {/* タイトル（現在は非表示） */}
      {/*
      <div className="bg-white px-3 py-2 text-sm font-semibold text-gray-800">
        {title}
      </div>
      */}
    </Link>
  );
}
