import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { PageLayout } from "./components/Layout";
import { CountryPage } from "./pages/CountryPage";

function App() {
  return (
    <Routes>
      <Route Component={PageLayout}>
        <Route path="/" Component={HomePage} />
        <Route path="/country/:code" Component={CountryPage} />
        <Route path="*" Component={() => <Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
