import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route index element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
