export default function MovieCard({ movie }) {
  // الربط مع صور موقعك الأصلي
  const imageUrl = `https://egybest.website/${movie.thumb}`;
  const watchUrl = `https://egybest.website/watch.php?vid=${movie.vid}`;

  return (
    <a href={watchUrl} target="_blank" rel="noopener noreferrer" className="group">
      <div className="bg-[#161b22] rounded-xl overflow-hidden border border-transparent group-hover:border-[#e6b31e] transition-all duration-300 shadow-lg">
        <div className="relative aspect-[2/3]">
          <img 
            src={imageUrl} 
            alt={movie.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="p-3">
          <h3 className="text-xs font-bold text-center truncate group-hover:text-[#e6b31e] transition-colors">
            {movie.display_title || movie.title}
          </h3>
        </div>
      </div>
    </a>
  );
}