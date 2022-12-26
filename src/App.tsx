import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Authorization from "./components/Authorization/Authorization";
import Registration from "./components/Registration/Registration";
import RestorePassword from "./components/RestorePassword/RestorePassword";
import LetterSent from "./components/RestorePassword/LetterSent";
import ConfirmEmail from "./components/ConfirmEmail/ConfirmEmail";
import NoLetter from "./components/NoLetter/NoLetter";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Authorization />} />
          <Route path="/auth" element={<Authorization />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/restore" element={<RestorePassword />} />
          <Route path="/sent" element={<LetterSent />} />
          <Route path="/confirm" element={<ConfirmEmail />} />
          <Route path="/noLetter" element={<NoLetter />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
