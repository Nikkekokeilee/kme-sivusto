export default function Etusivu() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="inline-block bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-full mb-6">
          Virallinen sivusto
        </div>
        
        <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
          Konemestarit ja Energiatekniset<br />KME ry
        </h1>
        
        <p className="text-2xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Ammattiyhdistys vuodesta 1958
        </p>

        <div className="flex gap-4 justify-center">
          <a href="/ajankohtaista" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all">
            Ajankohtaista
          </a>
          <a href="/yhdistys" className="border border-slate-300 hover:bg-slate-50 px-8 py-4 rounded-xl font-medium text-lg transition-all">
            Tutustu yhdistykseen
          </a>
        </div>
      </div>
    </div>
  );
}