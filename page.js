import MovieCard from '../components/MovieCard';

async function getMovies() {
  // جلب البيانات من موقعك الأصلي
  const res = await fetch('https://egybest.website/api.php', { cache: 'no-store' });
  if (!res.ok) return [];
  return res.json();
}

export default async function Home() {
  const movies = await getMovies();

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] dir-rtl" dir="rtl">
      {/* Header بسيط */}
      <header className="p-6 border-b border-[#161b22] bg-[#161b22]/50 sticky top-0 z-50 backdrop-blur-md">
        <h1 className="text-3xl font-black text-[#e6b31e] text-center">ايجي بست <span className="text-white text-sm font-normal">Next Gen</span></h1>
      </header>

      <div className="max-w-[1400px] mx-auto p-6">
        <h2 className="text-xl font-bold mb-6 border-r-4 border-[#e6b31e] pr-4">آخر الإضافات</h2>
        
        {/* شبكة الأفلام المصلحة للمقاسات */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.vid} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
}