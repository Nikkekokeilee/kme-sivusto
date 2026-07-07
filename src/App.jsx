import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigointi from "./components/Navigointi";
import Alatunniste from "./components/Alatunniste";

import Etusivu from "./pages/Etusivu";
import Ajankohtaista from "./pages/Ajankohtaista";
import Yhdistys from "./pages/Yhdistys";
import Jasenedut from "./pages/Jasenedut";
import Kopparo from "./pages/Kopparo";
import Linkit from "./pages/Linkit";
import Yhteystiedot from "./pages/Yhteystiedot";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Navigointi />
        <main>
          <Routes>
            <Route path="/" element={<Etusivu />} />
            <Route path="/ajankohtaista" element={<Ajankohtaista />} />
            <Route path="/yhdistys" element={<Yhdistys />} />
            <Route path="/jasenedut" element={<Jasenedut />} />
            <Route path="/kopparo" element={<Kopparo />} />
            <Route path="/linkit" element={<Linkit />} />
            <Route path="/yhteystiedot" element={<Yhteystiedot />} />
          </Routes>
        </main>
        <Alatunniste />
      </div>
    </BrowserRouter>
  );
}

export default App;