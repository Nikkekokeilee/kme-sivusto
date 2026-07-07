import { yhdistys } from "../data/sisalto";

export default function Alatunniste() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} {yhdistys.nimi}</p>
        <p className="text-sm mt-2">Suomen Konepäällystöliiton jäsenyhdistys</p>
      </div>
    </footer>
  );
}