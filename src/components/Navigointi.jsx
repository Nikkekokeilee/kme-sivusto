import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { nav } from "../data/sisalto";
import { useState } from "react";

export default function Navigointi() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">K</div>
            <div className="leading-tight">
              <div className="font-bold text-2xl text-slate-900">KME ry</div>
              <div className="text-xs text-slate-500">Konemestarit & Energiatekniset</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8 text-lg">
            {nav.map(item => (
              <Link
                key={item.to}
                to={item.to}
                className={`font-medium transition-colors hover:text-orange-600 ${location.pathname === item.to ? 'text-orange-600 font-semibold' : 'text-slate-600'}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden text-slate-700">
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-6 flex flex-col gap-6 text-lg">
            {nav.map(item => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="font-medium">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}