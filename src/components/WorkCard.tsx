type WorkCardProps = {
    title: string;
    description: string;
  };
  
  export default function WorkCard({ title, description }: WorkCardProps) {
    return (
      <div className="p-6 rounded-lg shadow-md border hover:shadow-lg transition">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  }
  