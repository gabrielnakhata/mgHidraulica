export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-4">
        {/* Spinner animado */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-4 border-dark-200"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-600 border-r-primary-500 animate-spin"></div>
        </div>
        {/* Texto */}
        <p className="text-dark-700 font-medium text-sm">Carregando...</p>
      </div>
    </div>
  );
}
